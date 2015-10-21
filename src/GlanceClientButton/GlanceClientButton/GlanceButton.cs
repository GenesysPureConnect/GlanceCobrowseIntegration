using System;
using System.Diagnostics;
using System.Drawing;
using System.Windows.Forms;
using ININ.Client.Common.Interactions;
using ININ.InteractionClient.Interactions;

namespace ININ.Alliances.GlanceClientButton
{
    public class GlanceButton : IInteractionButton
    {
        #region Private Fields
        

        #endregion



        #region Public Properties

        public string Id => "GLANCE_BUTTON";

        public Icon Icon => Resource1.glance;

        public string Text => "Cobrowse";

        public string ToolTipText => "Click to start a new Glance cobrowse session";

        public SupportedInteractionTypes SupportedInteractionTypes => SupportedInteractionTypes.All;

        #endregion



        public GlanceButton()
        {
            try
            {
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                GlanceAddin.AddinTracer.Exception(ex);
                MessageBox.Show(
                    "A critical error was encountered on initilization. The Glance integration will not function. " +
                    "Please contact your system administrator.\n\nError message: " + ex.Message,
                    "Glance Integration Initialization Failure!",
                    MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        #region Private Methods
        


        #endregion



        #region Public Methods

        public bool CanExecute(IInteraction selectedInteraction)
        {
            return true;
        }

        public void Execute(IInteraction selectedInteraction)
        {
            try
            {
                var sessionKey = "";

                // Get as attribute
                if (selectedInteraction != null)
                    sessionKey = selectedInteraction.GetAttribute("webtools_glanceSessionKey");

                // If we don't have it, ask the user
                if (string.IsNullOrEmpty(sessionKey))
                {
                    var d = new SessionKeyDialog();
                    d.ShowDialog();
                    if (d.SessionKeyDialogResult == SessionKeyDialogResult.JoinSession)
                        sessionKey = d.SessionKey;
                }

                // Launch join page
                if (!string.IsNullOrEmpty(sessionKey))
                    Process.Start("https://glance.net/cobrowse/AgentView.aspx?Wait=1&SessionKey=" + sessionKey);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message, "Error executing Glance button", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        #endregion
    }
}
