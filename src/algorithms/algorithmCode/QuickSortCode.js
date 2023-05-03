import React, { useState } from "react";
import "./sortingStyles.css";

const QuickSortCode = () => {
	const [showCode, setShowCode] = useState(false);

	const showClickHandler = () => {
		setShowCode((prevState) => !prevState);
	};
	return (
		<div className="code">
			<button onClick={showClickHandler}>
				{showCode ? "Hide Code" : "Show Code"}
			</button>
			{showCode && (
				<div>
					<pre className="program">
						{"        "}#include &lt;iostream&gt;{"\n"}
						{"        "}using namespace std;{"\n"}
						{"\n"}
						{"        "}void swap(int arr[], int i, int j){"\n"}
						{"        "}
						{"{"}
						{"\n"}
						{"            "}int temp = arr[i];{"\n"}
						{"            "}arr[i] = arr[j];{"\n"}
						{"            "}arr[j] = temp;{"\n"}
						{"        "}
						{"}"}
						{"\n"}
						{"\n"}
						{"        "}int partition(int arr[], int l, int r){"\n"}
						{"        "}
						{"{"}
						{"\n"}
						{"            "}int pivot = arr[r];{"\n"}
						{"            "}int i = l - 1;{"\n"}
						{"            "}for (int j = l; j &lt; r; j++){"\n"}
						{"            "}
						{"{"}
						{"\n"}
						{"                "}if (arr[j] &lt; pivot){"\n"}
						{"                "}
						{"{"}
						{"\n"}
						{"                    "}i++;{"\n"}
						{"                    "}swap(arr, i, j);{"\n"}
						{"                "}
						{"}"}
						{"\n"}
						{"            "}
						{"}"}
						{"\n"}
						{"            "}swap(arr, i + 1, r);{"\n"}
						{"\n"}
						{"            "}return i + 1;{"\n"}
						{"        "}
						{"}"}
						{"\n"}
						{"\n"}
						{"        "}void quickSort(int arr[], int l, int r){"\n"}
						{"        "}
						{"{"}
						{"\n"}
						{"            "}if (l &lt; r){"\n"}
						{"            "}
						{"{"}
						{"\n"}
						{"                "}int pi = partition(arr, l, r);{"\n"}
						{"\n"}
						{"                "}quickSort(arr, l, pi - 1);{"\n"}
						{"                "}quickSort(arr, pi + 1, r);{"\n"}
						{"            "}
						{"}"}
						{"\n"}
						{"        "}
						{"}"}
						{"\n"}
						{"\n"}
						{"        "}int main(){"\n"}
						{"        "}
						{"{"}
						{"\n"}
						{"\n"}
						{"            "}int n;{"\n"}
						{"            "}cin &gt;&gt; n;{"\n"}
						{"            "}int arr[n];{"\n"}
						{"            "}for (int i = 0; i &lt; n; i++){"\n"}
						{"            "}
						{"{"}
						{"\n"}
						{"                "}cin &gt;&gt; arr[i];{"\n"}
						{"            "}
						{"}"}
						{"\n"}
						{"            "}for (int i = 0; i &lt; n; i++){"\n"}
						{"            "}
						{"{"}
						{"\n"}
						{"                "}cout &lt;&lt; arr[i] &lt;&lt; " ";{"\n"}
						{"            "}
						{"}"}
						{"\n"}
						{"            "}cout &lt;&lt; endl;{"\n"}
						{"            "}quickSort(arr, 0, n - 1);{"\n"}
						{"\n"}
						{"            "}for (int i = 0; i &lt; n; i++){"\n"}
						{"            "}
						{"{"}
						{"\n"}
						{"                "}cout &lt;&lt; arr[i] &lt;&lt; " ";{"\n"}
						{"            "}
						{"}"}
						{"\n"}
						{"            "}return 0;{"\n"}
						{"        "}
						{"}"}
						{"\n"}
					</pre>
				</div>
			)}
		</div>
	);
};

export default QuickSortCode;
