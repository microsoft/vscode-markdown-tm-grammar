```swift
/**
 Returns a dictionary with the count for each element.

 - Parameter sequence: The sequence to count
 - Returns: A dictionary with counts keyed by element
 */
@available(swift 4.0)
func counts<S: Sequence>(for sequence: S) -> [S.Element: Int]
    where S.Element: Hashable
{
    var counts: [S.Element: Int] = [:]
    for element in sequence {
        counts[element, default: 0] += 1
    }

    return counts
}

counts(for: "Hello")
// [“H”: 1, “e”: 1, “l”: 2, “o”: 1]
```
