using System;
using System.ComponentModel;
using System.Runtime.CompilerServices;
using System.Windows;
using ININ.Alliances.GlanceClientButton.Annotations;

namespace ININ.Alliances.GlanceClientButton
{
    public partial class SessionKeyDialog : Window, INotifyPropertyChanged
    {
        private string _sessionKey;

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

        public SessionKeyDialogResult SessionKeyDialogResult { get; set; } = SessionKeyDialogResult.None;

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
}
