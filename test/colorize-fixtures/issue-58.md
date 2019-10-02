```log
2015-12-09 [2600] INFO  [main]: Hello world, testing log line stacktrace highlighting
System.NullReferenceException: Object reference not set to an instance of an object.
    at MyClass.DoSomethingElse(string foo)
    at MyClass.DoSomething()
2015-12-09 [2600] INFO  [main]: Hello world, testing log line URL highlighting, https://code.visualstudio.com/
2015-12-09 [2600] INFO  [main]: Hello world, testing log line namespace highlighting, MyApp.MyNameSpace.MyClass
2015-12-09 [2600] INFO  [main]: Hello world, testing log line GUID highlighting, FEDCBA09-1234-ABCD-0987-1234567890AB
2015-12-09 [2600] INFO  [main]: Hello world, testing log line bracketed GUID highlighting, {FEDCBA09-1234-ABCD-0987-1234567890AB}
2015-12-09 [2600] INFO  [main]: Hello world, testing log line "quoted text" highlighting
2015-12-09 [2600] INFO  [main]: Hello world, testing log line numeric constant highlighting, 1234
2015-12-09 [2600] INFO  [main]: Hello world, testing log line basic constant highlighting, true, false, null
2015-12-09 [2600] INFO  [main]: Hello world, testing log line level highlighting
2015-12-09 [2600] INFORMATION [main]: Hello world, testing log line level highlighting
2015-12-09 [2600] WARN  [main]: Hello world, testing log line level highlighting
2015-12-09 [2600] WARNING [main]: Hello world, testing log line level highlighting
2015-12-09 [2600] ERROR [main]: Hello world, testing log line level highlighting
2015-12-09 [2600] FAIL  [main]: Hello world, testing log line level highlighting
2015-12-09 [2600] FAILURE [main]: Hello world, testing log line level highlighting
2015-12-09 [2600] DEBUG [main]: Hello world, testing log line level highlighting
2015-12-09 [2600] TRACE [main]: Hello world, testing log line level highlighting
2015-12-09 09:29 [2600] INFO  [main]: Hello world, testing log line datestamp variation highlighting
2015-12-09 09:29:02.258 [2600] INFO  [main]: Hello world, testing log datestamp variation highlighting
12/09/2016 [2600] INFO  [main]: Hello world, testing log line datestamp variation highlighting
12.09.2016 [2600] INFO  [main]: Hello world, testing log line datestamp variation highlighting
12-09-2016 [2600] INFO  [main]: Hello world, testing log line datestamp variation highlighting
12-09-2015 09:29 [2600] INFO  [main]: Hello world, testing log line datestamp variation highlighting
12-09-2015 09:29:02,258 [2600] INFO  [main]: Hello world, testing log datestamp variation line highlighting
```
