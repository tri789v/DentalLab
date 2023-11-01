import Swal from "sweetalert2";

export const Toastify = (
    Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
);

export const ToastError = async (title) => (
    await Toastify.fire({ icon: 'error', title: title })
)

export const ToastInfo = async (title) => (
    await Toastify.fire({ icon: 'info', title: title })
)

export const ToastSuccess = async (title) => (
    await Toastify.fire({ icon: 'success', title: title })
)