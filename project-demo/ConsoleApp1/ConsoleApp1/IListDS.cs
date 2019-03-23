using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{   // 线性表的接口
    public interface IListDS<T>
    {
        int GetLength(); // 求长度
        void Clear(); // 清空操作
        bool IsEmpty();  // 判断线性表是否为空
        void Append(T item); // 附加操作
        void Insert(T item, int i); // 插入操作
        T Delete(int i); // 删除操作
        T GetElem(int i); // 取表元
        int Locate(T value); // 按值查找
        void Reverse(); // 倒置操作
    }
    // 顺序表类
    public class SeqList<T> : IListDS<T>
    {
        private int maxsize; // 顺序表的容量
        private T[] data; // 数组，用于存储顺序表中的数据元素
        private int last; // 指示顺序表最后一个元素的位置

        // 索引器
        public T this[int index]
        {
            get
            {
                return data[index];
            }
            set
            {
                data[index] = value;
            }
        }

        //最后一个数据元素位置属性
        public int Last
        {
            get
            {
                return last;
            }
        }

        // 容量属性
        public int Maxsize
        {
            get
            {
                return maxsize;
            }
            set
            {
                maxsize = value;
            }
        }
        //构造器
        public SeqList(int size)
        {
            data = new T[size];
            maxsize = size;
            last = -1;
        }
        //求顺序表的长度
        public int GetLength()
        {
            return last + 1;
        }
        //清空顺序表
        public void Clear()
        {
            last = -1;
        }
        //判断顺序表是否为空
        public bool IsEmpty()
        {
            if(last == -1)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        //判断顺序表是否为满
        public bool IsFull()
        {
            if(last == maxsize - 1)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        //在顺序表的末尾添加新元素
        public void Append(T item)
        {
            if (IsFull())
            {
                Console.WriteLine("List is full");
                return;
            }
            data[++last] = item;
        }
        //在顺序表的第i个数据元素的位置插入一个数据元素
        public void Insert(T item,int i)
        {
            if (IsFull())
            {
                Console.WriteLine("List is full");
                return;
            }
            if(i<1 || i > last + 2)
            {
                Console.WriteLine("Position is error!");
                return;
            }
            if (i == last + 2)
            {
                data[last + 1] = item;
            }
            else
            {
                for(int j = last; j >= i - 1; --j)
                {
                    data[j + 1] = data[j];
                }
                data[i - 1] = item;
            }
            ++last;
        }
        //删除顺序表的第i个数据元素
        public T Delete(int i)
        {
            T tmp = default(T);
            if (IsEmpty())
            {
                Console.WriteLine("List is empty");
                return tmp;
            }
            if(i<1 || i > last + 1)
            {
                Console.WriteLine("Position is error!");
                return tmp;
            }
            if(i==last + 1)
            {
                tmp = data[last--];
            }
            else
            {
                tmp = data[i - 1];
                for(int j = i; j <= last; ++j)
                {
                    data[j] = data[j + 1];
                }
            }
            --last;
            return tmp;
        }
        //获得顺序表的第i个数据元素
        public T GetElem(int i)
        {
            if (IsEmpty() || (i < 1) || (i > last + 1))
            {
                Console.WriteLine("List is empty or Position is error!");
                return default(T);
            }
            return data[i - 1];
        }
        //在顺序表中查找值为value的数据元素
        public int Locate(T value)
        {
            if (IsEmpty())
            {
                Console.WriteLine("List is Empty!");
                return -1;
            }
            int i = 0;
            for (i = 0; i <= last; i++)
            {
                if (value.Equals(data[i]))
                {
                    break;
                }
            }
            if (i > last)
            {
                return -1;
            }
            return i;
        }
        // 顺序表倒置
        public void Reverse()
        {
            T tmp = default(T);
            int len = GetLength();
            for(int i = 0; i <= len / 2; ++i)
            {
                tmp = data[i];
                data[i] = data[len - 1];
                data[i - 1] = tmp;
            }
        }
        // 按升序合并两个表
        public SeqList<int> Merge(SeqList<int> La, SeqList<int> Lb)
        {
            SeqList<int> Lc = new SeqList<int>(La.Maxsize + Lb.Maxsize);
            int i = 0;
            int j = 0;
            int k = 0;

            //两个表中都有数据元素
            while ((i <= (La.GetLength() - 1)) && (j <= (Lb.GetLength() - 1)))
            {
                if (La[i] < Lb[j])
                {
                    Lc.Append(La[i++]);
                }
                else
                {
                    Lc.Append(Lb[j++]);
                }
            }
            //a表中还有数据元素 
            while (i <= (La.GetLength() - 1))
            {
                Lc.Append(La[i++]);
            }
            //b表中还有数据元素 
            while (j <= (Lb.GetLength() - 1))
            {
                Lc.Append(Lb[j++]);
            }
            return Lc;
        }
        //从表中删除相同数据元素
        public SeqList<int> Purge(SeqList<int>La)
        {
            SeqList<int> Lb = new SeqList<int>(La.Maxsize);

            Lb.Append(La[0]);

            for(int i = 1; i <= La.GetLength() - 1; ++i)
            {
                int j = 0;

                for (j = 0; j <= Lb.GetLength() - 1; ++j)
                {
                    if (La[i].CompareTo(Lb[j]) == 0)
                    {
                        break;
                    }
                }

                if (j > Lb.GetLength() - 1)
                {
                    Lb.Append(La[i]);
                }
            }
            return Lb;
        }
    }
}
