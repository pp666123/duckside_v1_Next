import Swal from "sweetalert2";

export const successAlertModal = () => {
  Swal.fire({
    title: "新增成功",
    text: ``,
    icon: "success",
    confirmButtonColor: "#2A6470",
    confirmButtonText: "好",
  });
};

export const failAlertModal = ({ errors }: any) => {
  Swal.fire({
    title: "新增失敗",
    text: `
    ${errors.code && "股票代號,"} \
    ${errors.referencePrice && "參考價"}為必填`,
    icon: "error",
    confirmButtonColor: "#2A6470",
    confirmButtonText: "好",
  });
};
