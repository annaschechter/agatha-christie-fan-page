using System.Runtime.Serialization;

namespace AgathaChristieFanPage.Models
{
    [DataContract(IsReference = true)]
    public class ImageModel
    {
        [DataMember]
        public int Id { get; set; }
        [DataMember]
        public string AltText { get; set; }
        [DataMember]
        public string ImageUrl { get; set; }
        [DataMember]
        public int NovelId { get; set; }
        public virtual NovelModel Novel { get; set; }
    }
}