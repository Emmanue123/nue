
class SentenceAnalyzer {
     static voidmain(String) {
        Scanner = new Scanner(System.in);

        // Counters
        intlengthCounter = 0;
        intwordCounter = 0;
        intvowelCounter = 0;

        booleaninWord = false;

        System.out.println("Enter a sentence character by character (end with a period '.'):");

        while (true) {
            charch = scanner.next().charAt(0); // Read one character

            // Increment length
            lengthCounter++;

            // Check for vowel
            if ("aeiouAEIOU".indexOf(ch) != -1) {
                vowelCounter++;
            }

            // Word detection
            if (ch != ' ' && ch != '.') {
                if (!inWord) {
                    wordCounter++;
                    inWord = true;
                }
            } else {
                inWord = false;
            }

            // Stop reading at the period
            if (ch == '.') {
                break;
            }
        }

        // Output the results
        System.out.println("Length of the sentence: " + lengthCounter);
        System.out.println("Number of words: " + wordCounter);
        System.out.println("Number of vowels: " + vowelCounter);

        scanner.close();
    }
}