using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

// 泛型编程
public class Container<T>
{
    readonly int m_Size; // 容器的容量
    int m_ContainerPointer; // 容器指针，指示最后一个元素的位置
    T[] m_Items; // 容器数组，存放数据
    
    // 构造器
    public Container() : this(100)
    {
        m_ContainerPointer = -1;
        m_Size = 100;
    }

    // 构造器
    public Container(int size)
    {
        m_Size = size;
        m_Items = new T[m_Size];
        m_ContainerPointer = -1;
    }

    // 获取容器元素个数属性
    public int Count
    {
        get
        {
            return m_ContainerPointer;
        }
    }

    // 容器是否为空
    public bool IsEmpty
    {
        get
        {
            return (m_ContainerPointer == -1);
        }
    }

    // 容器是否已满
    public bool IsFull
    {
        get
        {
            return (m_ContainerPointer == m_Size - 1);
        }
    }

    // 在容器的尾部插入一个元素
    public void Insert(object item)
    {
        if (IsFull)
        {
            Console.WriteLine("Container is full!");
            return;
        }else if (IsEmpty)
        {
            m_Items[++m_ContainerPointer] = item;
        }
        else
        {
            m_Items[++m_ContainerPointer] = item;
        }
    }

    // 从容器的尾部删除一个元素
    public object Delete()
    {
        if(m_ContainerPointer >= 0)
        {
            return m_Items[m_ContainerPointer--];
        }
        return null;
    }

}
