import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface DataItem {
	name: string;
	value: number;
}

interface PieChartProps {
	data: DataItem[];
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
	const svgRef = useRef<SVGSVGElement | null>(null);

	useEffect(() => {
		if (!svgRef.current) return;

		const width = window.innerWidth;
		const height = Math.min(width, 500);

		const color = d3
			.scaleOrdinal<string>()
			.domain(data.map((d) => d.name))
			.range(d3.quantize((t) => d3.interpolateSpectral(t * 0.8 + 0.1), data.length).reverse());

		const pie = d3
			.pie<DataItem>()
			.sort(null)
			.value((d) => d.value)
			.padAngle(0.02);
		const arc = d3
			.arc()
			.innerRadius(0)
			.outerRadius(Math.min(width, height) / 2 - 1);

		const labelRadius = arc.outerRadius()() * 0.6;

		const arcLabel = d3
			.arc<d3.PieArcDatum<DataItem>>()
			.innerRadius(labelRadius)
			.outerRadius(labelRadius);
		const arcs = pie(data);

		// 清除先前的內容
		d3.select(svgRef.current).selectAll('*').remove();

		const svg = d3
			.select(svgRef.current)
			.attr('width', width)
			.attr('height', height)
			.attr('viewBox', [-width / 2, -height / 2, width, height])
			.attr(
				'style',
				'max-width: 100%; height: auto; font: 1.125rem sans-serif; line-height: 1.75rem;',
			);

		svg
			.append('g')
			.attr('stroke', 'white')
			.selectAll()
			.data(arcs)
			.join('path')
			.attr('fill', (d) => color(d.data.name))
			.attr('d', arc)
			.append('title')

			.text((d) => `${d.data.name}: ${d.data.value.toLocaleString('en-US')}`);

		svg
			.append('g')
			.attr('text-anchor', 'middle')
			.selectAll()
			.data(arcs)
			.join('text')
			.attr('transform', (d) => `translate(${arcLabel.centroid(d)})`)
			.call((text) =>
				text
					.append('tspan')
					.attr('y', '-0.4em')
					.attr('font-weight', 'bold')
					.text((d) => {
						const percentage = ((d.endAngle - d.startAngle) / (2 * Math.PI)) * 100;
						return `${d.data.name} (${percentage.toFixed(2)}%)`;
					}),
			)
			.call((text) =>
				text
					.filter((d) => d.endAngle - d.startAngle > 0.25)
					.append('tspan')
					.attr('x', 0)
					.attr('y', '0.7em')
					.attr('fill-opacity', 0.7)

					.text((d) => d.data.value.toLocaleString('en-US')),
			);

		// 額外標示框框
		const labelBox = svg.selectAll('arc').data(pie(data)).enter().append('g').attr('class', 'arc');

		data.forEach((d, i) => {
			const percentage = (d.value / d3.sum(data, (d) => d.value)) * 100;

			const label = labelBox
				.append('g')
				.attr('class', 'label')
				.attr('transform', `translate(0, ${i * 30})`);

			label
				.append('rect')
				.attr('x', -475)
				.attr('y', -204)
				.attr('width', 10)
				.attr('height', 10)
				.style('fill', color(i))
				.style('stroke', 'black');

			label
				.append('text')
				.attr('x', -460)
				.attr('y', -200)
				.attr('text-anchor', 'start')
				.attr('dy', '0.35em')
				.text(`${d.name}: (${percentage.toFixed(2)}%)`);
		});
	}, [data]);

	return <svg className='mt-5' ref={svgRef}></svg>;
};

export default PieChart;
