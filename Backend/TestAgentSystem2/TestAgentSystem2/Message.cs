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
    
    public partial class Message
    {
        public System.Guid MessageID { get; set; }
        public System.Guid GoalID { get; set; }
        public System.Guid AgentID { get; set; }
        public System.DateTime MessageTime { get; set; }
        public string Message1 { get; set; }
    
        public virtual Agent Agent { get; set; }
        public virtual Goal Goal { get; set; }
    }
}
