

//int n = Int32.Parse(Console.ReadLine());
//int x = 0;
//for (int i = 0; i < n; i++)
//{
//    string op = Console.ReadLine().Replace("X", "");
//    if (op == "++")
//        x++;
//    else
//        x--;
//}
//Console.WriteLine(x);



//int midPos = 3; // 3,3 - Position of middle of matrix
//int colIn = 0;
//int rowIn = 0;
//for (int i = 1; i <= 5; i++)
//{
//    string[] row = Console.ReadLine().Split(" ");

//    for(int j = 1; j <= 5; j++)
//    {
//        if (row[j - 1] == "1") // iterate from index 0 - 4
//        {
//            colIn = j; // Set Col = J (1-5 in coords)
//            rowIn = i;
//            break;
//        }
//    }
//    if (colIn != 0)
//        break;
//}
//int steps = Math.Abs(midPos - colIn) + Math.Abs(midPos - rowIn);
//Console.WriteLine(steps);

//string a = Console.ReadLine();
//string b = Console.ReadLine();
//int comparison = String.Compare(a, b, comparisonType: StringComparison.OrdinalIgnoreCase);
//if (comparison < 0)
//    Console.WriteLine("-1");
//else if (comparison > 0)
//    // b is greater
//    Console.WriteLine("1");
//else
//    // equal
//    Console.WriteLine("0");


// What I learned  Array.Sort(digits, (a,b) => Comparer<string>.Default.Compare(a,b));

//string sum = Console.ReadLine();
//string[] digits = sum.Split("+");
//Array.Sort(digits, (a,b) => Comparer<string>.Default.Compare(a,b));
//if (digits.Length > 0)
//{
//    Console.Write(digits[0]);
//    for (int i = 1; i < digits.Length; i++)
//        Console.Write("+" + digits[i]);
//}

string word = Console.ReadLine();
Console.WriteLine(Char.ToUpper(word[0]) + word.Substring(1));