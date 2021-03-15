/**
 * window 是否包含 showModalDialog 實作
 */
const hasShowModalDialog = !!window.showModalDialog;

if (window.showModalDialog === undefined) {
  /**
   * 是否已有開啟的子視窗
   */
  isOpen = false;

  /**
   * 以 window.open() 仿作開啟對話框
   */
  window.showModalDialog = function (uri, arguments, options) {
    if (isOpen) {
      alert('不支援同時開啟多個對話框');

      window.dialogWindow.focus();

      return;
    }

    dialogArguments = arguments || null;
    var dialogOptions = options
      ? options
          .replace(/(dialog)|(px)/gi, '')
          .replace(/;/g, ',')
          .replace(/\:/g, '=')
          .trim()
      : undefined;

    isOpen = true;
    window.dialogWindow = window.open(uri, '_blank', dialogOptions);
  };
}
