namespace api.Settings
{
    public class DataConfig
    {
        public string Dir { get; set; }
        public string CvFile { get; set; }
        public string FooterFile { get; set; }

        public string CvPath => $"{Dir}/{CvFile}";
        public string FooterPath => $"{Dir}/{FooterFile}";
    }
}
