//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace TestAgentSystem2
{
    using System;
    using System.Collections.Generic;
    
    public partial class Mission
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Mission()
        {
            this.Goals = new HashSet<Goal>();
        }
    
        public System.Guid MissionID { get; set; }
        public string MissionName { get; set; }
        public string Description { get; set; }
        public System.Guid MissionStatusID { get; set; }
        public System.DateTime CreationDate { get; set; }
        public string CompletionDate { get; set; }
    
        public virtual MissionStatus MissionStatus { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Goal> Goals { get; set; }
    }
}
