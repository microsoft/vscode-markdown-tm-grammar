# MkDocs / Python-Markdown


The language should be dot prefixed

``` { .sh }
# Shell comment
```

but if no other options are specified, then it may be excluded (including the curly braced)

``` sh
# Shell comment
```

When additional options such as an id and/or one or more classes are added, then the curly braces and dot prefixed language is required.

``` { .sh #id .class1 .class2 }
# Shell comment
``` 

Key/Value pairs may also be used inside curly braces

``` { .sh #id .class1 .class2 hl_lines="1 3" title="My Title" }
# Shell comment
```

However if only the language and key/value pairs are used, then it parses without curly braces

``` sh title="My Title"
# Shell comment
```
