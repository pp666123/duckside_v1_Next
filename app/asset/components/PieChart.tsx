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

		const width = 928;
		const height = Math.min(width, 500);

		const color = d3
			.scaleOrdinal<string>()
			.domain(data.map((d) => d.name))
			.range(d3.quantize((t) => d3.interpolateSpectral(t * 0.8 + 0.1), data.length + 1).reverse());

		const pie = d3
			.pie<DataItem>()
			.sort(null)
			.value((d) => d.value);

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

		const svg = d3
			.select(svgRef.current)
			.attr('width', width)
			.attr('height', height)
			.attr('viewBox', [-width / 2, -height / 2, width, height])
			.attr('style', 'max-width: 100%; height: auto; font: 10px sans-serif;');

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
					.text((d) => d.data.name),
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
	}, [data]);

	return <svg ref={svgRef}></svg>;
};

export default PieChart;
