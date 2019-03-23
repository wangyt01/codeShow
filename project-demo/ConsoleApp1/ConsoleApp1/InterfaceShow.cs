using System;

// 接口及该接口的C#实现
public interface IBook
{
    void ShowBook();
    string GetTitle();
    int GetPages();
    void SetPages(int pages);
}

public class NewBook : IBook
{
    public string title;
    public int pages;
    public string author;

    public NewBook(string title, string author, int pages)
    {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    public string GetTitle()
    {
        return title;
    }
    public int GetPages()
    {
        return pages;
    }
    public void SetPages(int pages)
    {
        this.pages = pages;
    }
    public void ShowBook()
    {
        Console.WriteLine("Title:{0}", title);
        Console.WriteLine("Author:{0}", author);
        Console.WriteLine("Pages:{0}", pages);
        Console.ReadKey();
    }
}

public class App
{
    static void Main()
    {
        NewBook MyNovel = new NewBook("China Dream", "Robert", 500);
        MyNovel.ShowBook();
    }
}
