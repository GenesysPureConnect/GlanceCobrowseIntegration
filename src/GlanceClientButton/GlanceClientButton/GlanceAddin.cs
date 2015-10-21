using System;
using System.Windows.Forms;
using ININ.Diagnostics;
using ININ.InteractionClient;
using ININ.InteractionClient.AddIn;
using ININ.InteractionClient.Interactions;

namespace ININ.Alliances.GlanceClientButton
{
    public class GlanceAddin : IAddIn
    {
        public static readonly ITopicTracer AddinTracer = TopicTracerFactory.CreateTopicTracer("ININ.Alliances.GlanceClientButtonAddin");

        public void Load(IServiceProvider serviceProvider)
        {
            try
            {
                // Add Recursive Labs button
                var service = ServiceLocator.Current.GetInstance<IClientInteractionButtonService>();
                if (service == null) throw new Exception("Unable to locate IClientInteractionButtonService service.");
                service.Add(new GlanceButton());
                GlanceAddin.AddinTracer.Always("Glance addin loaded");
            }
            catch (Exception ex)
            {
                GlanceAddin.AddinTracer.Exception(ex);
                MessageBox.Show(
                    "Error on load: " + ex.Message + Environment.NewLine + Environment.NewLine +
                    "Please restart your client and contact your system administrator if this issue persists.",
                    "Error loading Glance Addin", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        public void Unload()
        {

        }
    }
}
