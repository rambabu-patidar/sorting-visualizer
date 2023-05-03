import React, { useState } from "react";

const HeapSortCode = () => {
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
						{"        "}
						{"\n"}
						{"        "}#include &lt;iostream&gt;{"\n"}
						{"        "}using namespace std;{"\n"}
						{"\n"}
						{"        "}void heapify(int arr[], int n, int i){"\n"}
						{"        "}
						{"{"}
						{"\n"}
						{"            "}int largest = i; {"\n"}
						{"            "}int l = 2 * i + 1;{"\n"}
						{"            "}int r = 2 * i + 2; {"\n"}
						{"\n"}
						{"            "}if (l &lt; n &amp;&amp; arr[l] &gt; arr[largest])
						{"\n"}
						{"                "}largest = l;{"\n"}
						{"\n"}
						{"            "}if (r &lt; n &amp;&amp; arr[r] &gt; arr[largest])
						{"\n"}
						{"                "}largest = r;{"\n"}
						{"\n"}
						{"            "}if (largest != i){"\n"}
						{"            "}
						{"{"}
						{"\n"}
						{"                "}swap(arr[i], arr[largest]);{"\n"}
						{"\n"}
						{"                "}heapify(arr, n, largest);{"\n"}
						{"            "}
						{"}"}
						{"\n"}
						{"        "}
						{"}"}
						{"\n"}
						{"\n"}
						{"        "}void heapSort(int arr[], int n){"\n"}
						{"        "}
						{"{"}
						{"\n"}
						{"            "}for (int i = n / 2 - 1; i &gt;= 0; i--){"\n"}
						{"                "}heapify(arr, n, i);{"\n"}
						{"\n"}
						{"            "}for (int i = n - 1; i &gt;= 0; i--){"\n"}
						{"            "}
						{"{"}
						{"\n"}
						{"                "}swap(arr[0], arr[i]);{"\n"}
						{"\n"}
						{"                "}heapify(arr, i, 0);{"\n"}
						{"            "}
						{"}"}
						{"\n"}
						{"        "}
						{"}"}
						{"\n"}
						{"\n"}
						{"        "}void printArray(int arr[], int n){"\n"}
						{"        "}
						{"{"}
						{"\n"}
						{"            "}for (int i = 0; i &lt; n; ++i){"\n"}
						{"                "}cout &lt;&lt; arr[i] &lt;&lt; " ";{"\n"}
						{"            "}cout &lt;&lt; "\n";{"\n"}
						{"        "}
						{"}"}
						{"\n"}
						{"\n"}
						{"        "}int main(){"\n"}
						{"        "}
						{"{"}
						{"\n"}
						{"            "}int arr[] = {"{"}60, 20, 40, 70, 30, 10{"}"};{"\n"}
						{"            "}int n = sizeof(arr) / sizeof(arr[0]);{"\n"}
						{"            "}for (int i = n / 2 - 1; i &gt;= 0; i--){"\n"}
						{"            "}
						{"{"}
						{"\n"}
						{"                "}heapify(arr, n, i);{"\n"}
						{"            "}
						{"}"}
						{"\n"}
						{"\n"}
						{"            "}cout &lt;&lt; "After heapifying array is \n";{"\n"}
						{"            "}printArray(arr, n);{"\n"}
						{"\n"}
						{"            "}heapSort(arr, n);{"\n"}
						{"\n"}
						{"            "}cout &lt;&lt; "Sorted array is \n";{"\n"}
						{"            "}printArray(arr, n);{"\n"}
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

export default HeapSortCode;
