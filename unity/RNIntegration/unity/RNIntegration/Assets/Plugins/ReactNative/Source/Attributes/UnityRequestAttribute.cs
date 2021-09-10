using System;
using UnityEngine.Scripting;

namespace ReactNative
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Struct, AllowMultiple = true)]
    public sealed class UnityRequestAttribute : PreserveAttribute
    {
        public UnityRequestAttribute(string id)
        {
            Id = id;
        }

        public UnityRequestAttribute(string id, Enum type) : this(id)
        {
            Type = type;
        }

        public string Id { get; }

        public Enum Type { get; }
    }

    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Struct, AllowMultiple = true)]
    public sealed class UnityReverseRequestAttribute : PreserveAttribute
    {
        public UnityReverseRequestAttribute(string id)
        {
            Id = id;
        }

        public UnityReverseRequestAttribute(string id, Enum type) : this(id)
        {
            Type = type;
        }

        public string Id { get; }

        public Enum Type { get; }
    }
}
