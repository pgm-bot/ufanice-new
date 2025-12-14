import Swal from 'sweetalert2'

export const useSweetAlert = () => {
  /**
   * แสดง notification แจ้งเปลี่ยน URL
   */
  const showUrlChangeNotification = () => {
    if (!process.client) return

    Swal.fire({
      title: 'แจ้งเปลี่ยนลิ้ง URL หน้าเว็บ',
      html: 'ของแท้ต้อง <a style="color:green" href="https://t.ly/UNANCE" target="_blank">ufanice12.com</a> เท่านั้น!!<br>',
      imageUrl: 'https://sabackufanice.com/admin/uploads/15_news.jpg?t=1762563656',
      imageAlt: 'URL Change Notification',
      confirmButtonText: 'OK',
      confirmButtonColor: '#3085d6',
      allowOutsideClick: false,
      allowEscapeKey: false,
      showClass: {
        popup: 'swal2-show',
        backdrop: 'swal2-backdrop-show',
        icon: 'swal2-icon-show'
      },
      hideClass: {
        popup: 'swal2-hide',
        backdrop: 'swal2-backdrop-hide',
        icon: 'swal2-icon-hide'
      },
      customClass: {
        container: 'swal2-container',
        popup: 'swal2-popup',
        header: 'swal2-header',
        title: 'swal2-title',
        closeButton: 'swal2-close',
        icon: 'swal2-icon',
        image: 'swal2-image',
        content: 'swal2-content',
        input: 'swal2-input',
        actions: 'swal2-actions',
        confirmButton: 'swal2-confirm',
        cancelButton: 'swal2-cancel',
        footer: 'swal2-footer'
      },
      progressSteps: ['1', '2', '3'],
      currentProgressStep: 0
    })
  }

  /**
   * แสดง notification แบบทั่วไป
   */
  const showNotification = (options: {
    title?: string
    text?: string
    html?: string
    icon?: 'success' | 'error' | 'warning' | 'info' | 'question'
    confirmButtonText?: string
    imageUrl?: string
  }) => {
    if (!process.client) return

    return Swal.fire({
      title: options.title,
      text: options.text,
      html: options.html,
      icon: options.icon,
      imageUrl: options.imageUrl,
      confirmButtonText: options.confirmButtonText || 'ตกลง',
      confirmButtonColor: '#3085d6',
      showClass: {
        popup: 'swal2-show'
      },
      hideClass: {
        popup: 'swal2-hide'
      }
    })
  }

  /**
   * แสดง confirmation dialog
   */
  const showConfirmation = async (options: {
    title: string
    text?: string
    html?: string
    confirmButtonText?: string
    cancelButtonText?: string
  }) => {
    if (!process.client) return { isConfirmed: false }

    return await Swal.fire({
      title: options.title,
      text: options.text,
      html: options.html,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: options.confirmButtonText || 'ยืนยัน',
      cancelButtonText: options.cancelButtonText || 'ยกเลิก',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    })
  }

  /**
   * แสดง success message
   */
  const showSuccess = (title: string, text?: string) => {
    if (!process.client) return

    return Swal.fire({
      title,
      text,
      icon: 'success',
      confirmButtonText: 'ตกลง',
      confirmButtonColor: '#3085d6',
      timer: 2000,
      timerProgressBar: true
    })
  }

  /**
   * แสดง error message
   */
  const showError = (title: string, text?: string) => {
    if (!process.client) return

    return Swal.fire({
      title,
      text,
      icon: 'error',
      confirmButtonText: 'ตกลง',
      confirmButtonColor: '#3085d6'
    })
  }

  /**
   * แสดง loading
   */
  const showLoading = (title: string = 'กำลังโหลด...') => {
    if (!process.client) return

    Swal.fire({
      title,
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading()
      }
    })
  }

  /**
   * ปิด alert
   */
  const close = () => {
    if (!process.client) return
    Swal.close()
  }

  return {
    showUrlChangeNotification,
    showNotification,
    showConfirmation,
    showSuccess,
    showError,
    showLoading,
    close
  }
}
