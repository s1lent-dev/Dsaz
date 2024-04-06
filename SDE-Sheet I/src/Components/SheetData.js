const sheetData = [
    //* Topic 1 - Arrays
    {
        "topicID" : 1,
        "topic" : "Arrays - Matrix - Strings",
        "totalQues": 0,
        "totalEasy" : 0,
        "totalMedium": 0,
        "totalHard" : 0,
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
                "title": "Two sums",
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
                "problemId" : 21,
                "title": "Pascle's Triangle",
                "difficulty": "Easy",
                "article": "https://takeuforward.org/data-structure/program-to-generate-pascals-triangle/",
                "leetcode": "https://leetcode.com/problems/pascals-triangle/description/",
                "gfg": "https://www.geeksforgeeks.org/problems/pascal-triangle0652/1"
            }
        ],
        "img" : "/Dsaz/Images/arrays.jpg"
    }
]