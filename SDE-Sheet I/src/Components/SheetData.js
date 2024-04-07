const sheetData = [
    //* Topic 1 - Arrays
    {
        "topicID" : 1,
        "topic" : "Arrays - Matrix - Strings",
        "totalQues": 58,
        "totalEasy" : 22,
        "totalMedium": 28,
        "totalHard" : 8,
        "overview": "Arrays are ordered collections of contiguous memory locations and accessed based on index. Matrix is 2-D array which organizes data in rows and columns. Strings are sequence / array of characters.",
        "problems" : [
            {
                "problemId" : 1,
                "title": "Reverse the array/string",
                "difficulty": "Easy",
                "article": "https://takeuforward.org/data-structure/reverse-a-string/",
                "leetcode": "https://leetcode.com/problems/reverse-string/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/reverse-a-string/1"
            },
            {
                "problemId" : 2,
                "title": "Maxiumum and Minimum element in an array",
                "difficulty": "Easy",
                "article": "https://takeuforward.org/data-structure/find-the-largest-element-in-an-array/",
                "leetcode": "",
                "gfg": "https://www.geeksforgeeks.org/problems/find-minimum-and-maximum-element-in-an-array4428/1"
            },
            {
                "problemId" : 3,
                "title": "\"Kth\" max and min element of an array",
                "difficulty": "Medium",
                "article": "https://takeuforward.org/data-structure/kth-largest-smallest-element-in-an-array/",
                "leetcode": "https://leetcode.com/problems/kth-largest-element-in-an-array/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/kth-smallest-element5635/1"
            },
            {
                "problemId" : 4,
                "title": "Remove duplicate elements from sorted array",
                "difficulty": "Easy",
                "article": "https://takeuforward.org/data-structure/remove-duplicates-in-place-from-sorted-array/",
                "leetcode": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/remove-duplicate-elements-from-sorted-array/1"
            },
            {
                "problemId" : 5,
                "title": "Check if array is sorted and rotated",
                "difficulty": "Easy",
                "article": "https://takeuforward.org/data-structure/check-if-an-array-is-sorted/",
                "leetcode": "https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/check-if-an-array-is-sorted0701/1"
            },
            {
                "problemId" : 6,
                "title": "Left Rotate an array by \"k\" elements",
                "difficulty": "Medium",
                "article": "https://takeuforward.org/data-structure/rotate-array-by-k-elements/",
                "leetcode": "https://leetcode.com/problems/rotate-array/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/rotate-array-by-n-elements-1587115621/1"
            },
            {
                "problemId" : 7,
                "title": "Move all negatives / zeros to end",
                "difficulty": "Easy",
                "article": "https://takeuforward.org/data-structure/move-all-zeros-to-the-end-of-the-array/",
                "leetcode": "https://leetcode.com/problems/move-zeroes/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/move-all-negative-elements-to-end1813/1"
            },
            {
                "problemId" : 8,
                "title": "Find missing number in array",
                "difficulty": "Easy",
                "article": "https://takeuforward.org/arrays/find-the-missing-number-in-an-array/",
                "leetcode": "https://leetcode.com/problems/missing-number/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/missing-number-in-array1416/1"
            },
            {
                "problemId" : 9,
                "title": "Maximum consecutive 1's in binary array",
                "difficulty": "Easy",
                "article": "https://takeuforward.org/data-structure/count-maximum-consecutive-ones-in-the-array/",
                "leetcode": "https://leetcode.com/problems/max-consecutive-ones/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/longest-consecutive-1s-1587115620/1"
            },
            {
                "problemId" : 10,
                "title": "Find single number that appears only once",
                "difficulty": "Easy",
                "article": "https://takeuforward.org/arrays/find-the-number-that-appears-once-and-the-other-numbers-twice/",
                "leetcode": "https://leetcode.com/problems/single-number/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/element-appearing-once2552/1"
            },
            {
                "problemId" : 11,
                "title": "Longest subarray with sum k",
                "difficulty": "Medium",
                "article": "https://takeuforward.org/arrays/longest-subarray-with-sum-k-postives-and-negatives/",
                "leetcode": "https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0809/1"
            },
            {
                "problemId" : 12,
                "title": "Two sum",
                "difficulty": "Easy",
                "article": "https://takeuforward.org/data-structure/two-sum-check-if-a-pair-with-given-sum-exists-in-array/",
                "leetcode": "https://leetcode.com/problems/two-sum/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/count-pairs-with-given-sum5022/1"
            },
            {
                "problemId" : 13,
                "title": "Sort an array of 0's, 1's and 2's",
                "difficulty": "Medium",
                "article": "https://takeuforward.org/data-structure/sort-an-array-of-0s-1s-and-2s/",
                "leetcode": "https://leetcode.com/problems/sort-colors/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1"
            },
            {
                "problemId" : 14,
                "title": "Majority Element",
                "difficulty": "Easy",
                "article": "https://takeuforward.org/data-structure/find-the-majority-element-that-occurs-more-than-n-2-times/",
                "leetcode": "https://leetcode.com/problems/majority-element/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/majority-element-1587115620/1"
            },
            {
                "problemId" : 15,
                "title": "Kadane's Algorithm - Maximum subarray sum",
                "difficulty": "Medium",
                "article": "https://takeuforward.org/data-structure/kadanes-algorithm-maximum-subarray-sum-in-an-array/",
                "leetcode": "https://leetcode.com/problems/maximum-subarray/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1"
            },
            {
                "problemId" : 16,
                "title": "Minimum number of jumps to reach end",
                "difficulty": "Medium",
                "article": "https://www.geeksforgeeks.org/minimum-number-jumps-reach-endset-2on-solution/",
                "leetcode": "https://leetcode.com/problems/jump-game-ii/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/minimum-number-of-jumps-1587115620/1"
            },
            {
                "problemId" : 17,
                "title": "Best time to buy and sell stock",
                "difficulty": "Easy",
                "article": "https://takeuforward.org/data-structure/stock-buy-and-sell/",
                "leetcode": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/stock-buy-and-sell-1587115621/1"
            },
            {
                "problemId" : 18,
                "title": "Rearrange the array in alternating positive and negative items",
                "difficulty": "Medium",
                "article": "https://takeuforward.org/arrays/rearrange-array-elements-by-sign/",
                "leetcode": "https://leetcode.com/problems/rearrange-array-elements-by-sign/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/array-of-alternate-ve-and-ve-nos1401/1"
            },
            {
                "problemId" : 19,
                "title": "Next Permutation",
                "difficulty": "Medium",
                "article": "https://takeuforward.org/data-structure/next_permutation-find-next-lexicographically-greater-permutation/",
                "leetcode": "https://leetcode.com/problems/next-permutation/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/next-permutation5226/1"
            },
            {
                "problemId" : 20,
                "title": "Longest Consecutive Sequence",
                "difficulty": "Medium",
                "article": "https://takeuforward.org/data-structure/longest-consecutive-sequence-in-an-array/",
                "leetcode": "https://leetcode.com/problems/longest-consecutive-sequence/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/longest-consecutive-subsequence2449/1"
            },
            {
                "problemId" : 21,
                "title": "Pascle's Triangle",
                "difficulty": "Easy",
                "article": "https://takeuforward.org/data-structure/program-to-generate-pascals-triangle/",
                "leetcode": "https://leetcode.com/problems/pascals-triangle/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/pascal-triangle0652/1"
            },
            {
                "problemId" : 22,
                "title": "Majority Element II",
                "difficulty": "Medium",
                "article": "https://takeuforward.org/data-structure/majority-elementsn-3-times-find-the-elements-that-appears-more-than-n-3-times-in-the-array/",
                "leetcode": "https://leetcode.com/problems/majority-element-ii/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/majority-vote/1"
            },
            {
                "problemId" : 23,
                "title": "Maximum Product Subarray",
                "difficulty": "Medium",
                "article": "https://takeuforward.org/data-structure/maximum-product-subarray-in-an-array/",
                "leetcode": "https://leetcode.com/problems/maximum-product-subarray/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/maximum-product-subarray3604/1"
            },
            {
                "problemId" : 24,
                "title": "Largest subarray with 0 sum",
                "difficulty": "Medium",
                "article": "https://takeuforward.org/data-structure/length-of-the-longest-subarray-with-zero-sum/",
                "leetcode": "",
                "gfg": "https://www.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1"
            },
            {
                "problemId" : 25,
                "title": "Merge two sorted arrays",
                "difficulty": "Medium",
                "article": "https://takeuforward.org/data-structure/merge-two-sorted-arrays-without-extra-space/",
                "leetcode": "https://leetcode.com/problems/merge-sorted-array/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/merge-two-sorted-arrays-1587115620/1"
            },
            {
                "problemId" : 26,
                "title": "Find reapeating and missing number",
                "difficulty": "Easy",
                "article": "https://takeuforward.org/data-structure/find-the-repeating-and-missing-numbers/",
                "leetcode": "https://leetcode.com/problems/find-missing-and-repeated-values/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/find-missing-and-repeating2512/1"
            },
            {
                "problemId" : 27,
                "title": "Three sum",
                "difficulty": "Medium",
                "article": "https://takeuforward.org/data-structure/3-sum-find-triplets-that-add-up-to-a-zero/",
                "leetcode": "https://leetcode.com/problems/3sum/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/triplet-sum-in-array-1587115621/1"
            },
            {
                "problemId" : 28,
                "title": "Four sum",
                "difficulty": "Hard",
                "article": "https://takeuforward.org/data-structure/4-sum-find-quads-that-add-up-to-a-target-value/",
                "leetcode": "https://leetcode.com/problems/4sum/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/find-all-four-sum-numbers1732/1"
            },
            {
                "problemId" : 29,
                "title": "Reverse pairs",
                "difficulty": "Hard",
                "article": "https://takeuforward.org/data-structure/count-reverse-pairs/",
                "leetcode": "https://leetcode.com/problems/reverse-pairs/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/count-reverse-pairs/1"
            },
            {
                "problemId" : 30,
                "title": "Count Inversions",
                "difficulty": "Hard",
                "article": "https://takeuforward.org/data-structure/count-inversions-in-an-array/",
                "leetcode": "",
                "gfg": "https://www.geeksforgeeks.org/problems/inversion-of-array-1587115620/1"
            },
            {
                "problemId" : 31,
                "title": "Spiral Matrix",
                "difficulty": "Medium",
                "article": "https://takeuforward.org/data-structure/spiral-traversal-of-matrix/",
                "leetcode": "https://leetcode.com/problems/spiral-matrix/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/spirally-traversing-a-matrix-1587115621/1"
            },
            {
                "problemId" : 32,
                "title": "Set Matrix Zeroes",
                "difficulty": "Medium",
                "article": "https://takeuforward.org/data-structure/set-matrix-zero/",
                "leetcode": "https://leetcode.com/problems/set-matrix-zeroes/description/",
                "gfg": ""
            },
            {
                "problemId" : 33,
                "title": "Rotate Matrix by 90 degrees",
                "difficulty": "Medium",
                "article": "https://takeuforward.org/data-structure/rotate-image-by-90-degree/",
                "leetcode": "https://leetcode.com/problems/rotate-image/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/rotate-by-90-degree0356/1"
            },
            {
                "problemId" : 34,
                "title": "Rotate Matrix by 90 degrees",
                "difficulty": "Medium",
                "article": "https://takeuforward.org/data-structure/rotate-image-by-90-degree/",
                "leetcode": "https://leetcode.com/problems/rotate-image/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/rotate-by-90-degree0356/1"
            },
            {
                "problemId" : 35,
                "title": "Check if a string is palindrome",
                "difficulty": "Easy",
                "article": "https://takeuforward.org/data-structure/check-if-the-given-string-is-palindrome-or-not/",
                "leetcode": "https://leetcode.com/problems/valid-palindrome/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/palindrome-string0817/1"
            },
            {
                "problemId" : 36,
                "title": "Reverse words in a string",
                "difficulty": "Medium",
                "article": "https://takeuforward.org/data-structure/reverse-words-in-a-string/",
                "leetcode": "https://leetcode.com/problems/reverse-words-in-a-string/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/reverse-words-in-a-given-string5459/1"
            },
            {
                "problemId" : 37,
                "title": "Isomorphic Strings",
                "difficulty": "Easy",
                "article": "https://www.geeksforgeeks.org/check-if-two-given-strings-are-isomorphic-to-each-other/",
                "leetcode": "https://leetcode.com/problems/isomorphic-strings/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/isomorphic-strings-1587115620/1"
            },
            {
                "problemId" : 38,
                "title": "Remove outermost paranthesis",
                "difficulty": "Easy",
                "article": "https://www.geeksforgeeks.org/reduce-string-by-removing-outermost-parenthesis-from-each-primitive-substring/",
                "leetcode": "https://leetcode.com/problems/remove-outermost-parentheses/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/outermost-parentheses/1"
            },
            {
                "problemId" : 39,
                "title": "Largest odd number in string",
                "difficulty": "Easy",
                "article": "https://www.geeksforgeeks.org/find-the-largest-odd-number-in-string/",
                "leetcode": "https://leetcode.com/problems/largest-odd-number-in-string/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/largest-odd-number-in-string/1"
            },
            {
                "problemId" : 40,
                "title": "Longest common prefix",
                "difficulty": "Easy",
                "article": "https://www.geeksforgeeks.org/longest-common-prefix-using-word-by-word-matching/",
                "leetcode": "https://leetcode.com/problems/longest-common-prefix/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/longest-common-prefix-in-an-array5129/1"
            },
            {
                "problemId" : 41,
                "title": "Check whether one string is a rotation of another",
                "difficulty": "Easy",
                "article": "https://www.geeksforgeeks.org/a-program-to-check-if-strings-are-rotations-of-each-other/",
                "leetcode": "https://leetcode.com/problems/rotate-string/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/check-if-strings-are-rotations-of-each-other-or-not-1587115620/1"
            },
            {
                "problemId" : 42,
                "title": "Check if two strings are anagram of each other",
                "difficulty": "Easy",
                "article": "https://takeuforward.org/data-structure/check-if-two-strings-are-anagrams-of-each-other/",
                "leetcode": "https://leetcode.com/problems/valid-anagram/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/anagram-1587115620/1"
            },
            {
                "problemId" : 43,
                "title": "Sort characters by frequency",
                "difficulty": "Medium",
                "article": "https://www.geeksforgeeks.org/sort-a-string-according-to-the-frequency-of-characters/",
                "leetcode": "https://leetcode.com/problems/sort-characters-by-frequency/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/sorting-elements-of-an-array-by-frequency-1587115621/1"
            },
            {
                "problemId" : 44,
                "title": "Maximum Nesting Depth of Paranthesis",
                "difficulty": "Easy",
                "article": "https://www.geeksforgeeks.org/find-maximum-depth-nested-parenthesis-string/",
                "leetcode": "https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/maximum-nesting-depth-of-the-parentheses/1"
            },
            {
                "problemId" : 45,
                "title": "Roman to Integer",
                "difficulty": "Easy",
                "article": "https://www.geeksforgeeks.org/converting-roman-numerals-decimal-lying-1-3999/",
                "leetcode": "https://leetcode.com/problems/roman-to-integer/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/roman-number-to-integer3201/1"
            },
            {
                "problemId" : 46,
                "title": "Integer to Roman",
                "difficulty": "Medium",
                "article": "https://www.geeksforgeeks.org/converting-decimal-number-lying-between-1-to-3999-to-roman-numerals/",
                "leetcode": "https://leetcode.com/problems/integer-to-roman/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/convert-to-roman-no/1"
            },
            {
                "problemId" : 47,
                "title": "Implement Atoi - (String to Integer)",
                "difficulty": "Medium",
                "article": "https://www.geeksforgeeks.org/convert-string-to-integer-without-using-any-in-built-functions/",
                "leetcode": "https://leetcode.com/problems/string-to-integer-atoi/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/implement-atoi/1"
            },
            {
                "problemId" : 48,
                "title": "Implement Atoi - (String to Integer)",
                "difficulty": "Medium",
                "article": "https://www.geeksforgeeks.org/convert-string-to-integer-without-using-any-in-built-functions/",
                "leetcode": "https://leetcode.com/problems/string-to-integer-atoi/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/implement-atoi/1"
            },
            {
                "problemId" : 49,
                "title": "Count number of substrings",
                "difficulty": "Medium",
                "article": "https://www.geeksforgeeks.org/count-number-of-substrings-with-exactly-k-distinct-characters/",
                "leetcode": "",
                "gfg": "https://www.geeksforgeeks.org/problems/count-number-of-substrings4528/1"
            },
            {
                "problemId" : 50,
                "title": "Longest Palindromic Substring",
                "difficulty": "Hard",
                "article": "https://www.geeksforgeeks.org/longest-palindromic-substring-set-2/",
                "leetcode": "https://leetcode.com/problems/longest-palindromic-substring/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/longest-palindrome-in-a-string3411/1"
            },
            {
                "problemId" : 51,
                "title": "Sum of beauty of all substrings",
                "difficulty": "Medium",
                "article": "",
                "leetcode": "https://leetcode.com/problems/sum-of-beauty-of-all-substrings/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/sum-of-beauty-of-all-substrings-1662962118/1"
            },
            {
                "problemId" : 52,
                "title": "Reverse each word in a string",
                "difficulty": "Medium",
                "article": "https://www.geeksforgeeks.org/reverse-individual-words/",
                "leetcode": "https://leetcode.com/problems/reverse-words-in-a-string-iii/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/reverse-each-word-in-a-given-string1001/1"
            },
            {
                "problemId" : 53,
                "title": "Count and Say",
                "difficulty": "Medium",
                "article": "https://www.geeksforgeeks.org/look-and-say-sequence/",
                "leetcode": "https://leetcode.com/problems/count-and-say/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/decode-the-pattern1138/1"
            },
            {
                "problemId" : 54,
                "title": "Minimum Add to Make Parentheses Valid",
                "difficulty": "Medium",
                "article": "https://www.geeksforgeeks.org/minimum-number-of-parentheses-to-be-added-to-make-it-valid/",
                "leetcode": "https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/",
                "gfg": ""
            },
            {
                "problemId" : 55,
                "title": "Rabin Karp Algorithm",
                "difficulty": "Hard",
                "article": "https://www.geeksforgeeks.org/rabin-karp-algorithm-for-pattern-searching/",
                "leetcode": "https://leetcode.com/problems/repeated-string-match/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/search-pattern-rabin-karp-algorithm--141631/1"
            },
            {
                "problemId" : 56,
                "title": "Rabin Karp Algorithm",
                "difficulty": "Hard",
                "article": "https://www.geeksforgeeks.org/rabin-karp-algorithm-for-pattern-searching/",
                "leetcode": "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/search-pattern-rabin-karp-algorithm--141631/1"
            },
            {
                "problemId" : 57,
                "title": "KMP Algorithm - (Longest Prefix Suffix)",
                "difficulty": "Hard",
                "article": "https://www.geeksforgeeks.org/longest-prefix-also-suffix/",
                "leetcode": "https://leetcode.com/problems/longest-happy-prefix/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/longest-prefix-suffix2527/1"
            },
            {
                "problemId" : 58,
                "title": "Shortest Palindrome",
                "difficulty": "Hard",
                "article": "https://www.geeksforgeeks.org/minimum-insertions-to-form-shortest-palindrome/",
                "leetcode": "https://leetcode.com/problems/shortest-palindrome/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/form-a-palindrome1455/1"
            }
        ],
        "img" : "/Dsaz/Images/arrays.jpg"
    }
]
