using System;
using UnityEngine.Scripting;

namespace ReactNative
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Struct, AllowMultiple = true)]
    public sealed class CustomMessageAttribute : PreserveAttribute
    {
        public CustomMessageAttribute() { }
    }
}
