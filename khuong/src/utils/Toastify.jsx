import Swal from "sweetalert2";

export const Toastify = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

export const ToastError = async (title) => {
    await Toastify.fire({ icon: 'error', title });
};

export const ToastInfo = async (title) => {
    await Toastify.fire({ icon: 'info', title });
};

export const ToastSuccess = async (title) => {
    await Toastify.fire({ icon: 'success', title });
};

export const ToastConfirmDelete = async () => {
    await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    })
}
