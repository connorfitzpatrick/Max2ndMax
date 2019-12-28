import java.util.Arrays;

public class Max2ndMax {
	public static Max2ndMax dcfindmax2ndmax(int[] A, int i, int j) {
		// Complete this method to find max and 2nd max in an array A
		// At most 3/2n-2 comparisons
		
		Max2ndMax answer = new Max2ndMax();
		
		if(A.length == 1) {                
			answer.max = A[0];
			answer.max2nd = Integer.MIN_VALUE;
		} // if() 
		else if(A.length == 2) {           
			if(A[0] > A[1]) {							
				answer.max = A[0];
				answer.max2nd = A[1];
			} // if()
			else {
				answer.max = A[1];
				answer.max2nd = A[0];
			} // else()
		} // else if()
		else {
			int n = A.length;
			int[] left = Arrays.copyOfRange(A, 0, (n+1)/2);
			int[] right = Arrays.copyOfRange(A, (n+1)/2, n);
			Max2ndMax leftMaxes = new Max2ndMax();
			Max2ndMax rightMaxes = new Max2ndMax();
			
			leftMaxes = dcfindmax2ndmax(left, i, j);
			rightMaxes = dcfindmax2ndmax(right, i, j);
			
			if (leftMaxes.max > rightMaxes.max) {				//		2
				answer.max = leftMaxes.max;
				if (leftMaxes.max2nd > rightMaxes.max) {
					answer.max2nd = leftMaxes.max2nd;
				} // if()
				else {
					answer.max2nd = rightMaxes.max;
				} // else()
			} // if()
			else {
				answer.max = rightMaxes.max;
				if (rightMaxes.max2nd > leftMaxes.max) {
					answer.max2nd = rightMaxes.max2nd;
				} // if()
				else {
					answer.max2nd = leftMaxes.max;
				} // else()
			} // else()
		} // else()
		return answer;
		
	} // dcfindmax2ndmax()
	
	public static void main(String[] args) {
		// TODO Auto-generated method
		int[] givenarray = {100,2,3,4,5,6,7,67,2,32};	
		
		// Test your method
		Max2ndMax pair = new Max2ndMax();
		pair = dcfindmax2ndmax(givenarray, 0, givenarray.length-1);
		int max2nd = pair.max2nd;
		int max = pair.max;
		System.out.println("The max and 2ndmax of the given array are "+ max + " and "+max2nd+".");
		// Your method should return 100 and 67
		
	} // main()
} // Problem2

