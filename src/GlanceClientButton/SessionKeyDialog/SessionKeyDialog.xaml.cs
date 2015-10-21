using System;
using System.ComponentModel;
using System.Runtime.CompilerServices;
using System.Windows;
using SessionKeyDialog.Annotations;

namespace SessionKeyDialogLib
{
    /// <summary>
    /// Interaction logic for SessionKeyDialog.xaml
    /// </summary>
    public partial class SessionKeyDialog : Window, INotifyPropertyChanged
    {
        private string _sessionKey;
        private SessionKeyDialogResult _sessionKeyDialogResult = SessionKeyDialogResult.None;

        #region Private Members



        #endregion



        #region Public Members
        
        public event PropertyChangedEventHandler PropertyChanged;

        public string SessionKey
        {
            get { return _sessionKey; }
            set
            {
                _sessionKey = value;
                OnPropertyChanged();
            }
        }

        public SessionKeyDialogResult SessionKeyDialogResult
        {
            get { return _sessionKeyDialogResult; }
            set { _sessionKeyDialogResult = value; }
        }

        #endregion



        public SessionKeyDialog()
        {
            InitializeComponent();
        }



        #region Private Methods

        [NotifyPropertyChangedInvocator]
        protected virtual void OnPropertyChanged([CallerMemberName] string propertyName = null)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }

        private void Cancel_OnClick(object sender, RoutedEventArgs e)
        {
            try
            {
                SessionKeyDialogResult = SessionKeyDialogResult.Cancel;
                this.Close();
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message, "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

        private void JoinSession_OnClick(object sender, RoutedEventArgs e)
        {
            try
            {
                SessionKeyDialogResult = SessionKeyDialogResult.JoinSession;
                this.Close();
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message, "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

        #endregion



        #region Public Methods



        #endregion
    }

    public enum SessionKeyDialogResult
    {
        None,
        Cancel,
        JoinSession
    }
}
