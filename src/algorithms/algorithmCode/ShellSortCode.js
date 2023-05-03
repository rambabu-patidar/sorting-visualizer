import React, { useState } from "react";
import "./sortingStyles.css";
const ShellSortCode = () => {
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
						{"        "}void swapping(int &amp;a, int &amp;b){"\n"}
						{"        "}
						{"{"} {"\n"}
						{"            "}int temp;{"\n"}
						{"            "}temp = a;{"\n"}
						{"            "}a = b;{"\n"}
						{"            "}b = temp;{"\n"}
						{"        "}
						{"}"}
						{"\n"}
						{"        "}void display(int *array, int size){"\n"}
						{"        "}
						{"{"}
						{"\n"}
						{"            "}for (int i = 0; i &lt; size; i++){"\n"}
						{"                "}cout &lt; array[i] &lt; " ";{"\n"}
						{"            "}cout &lt; endl;{"\n"}
						{"        "}
						{"}"}
						{"\n"}
						{"        "}void shellSort(int *arr, int n){"\n"}
						{"        "}
						{"{"}
						{"\n"}
						{"            "}int gap, j, k;{"\n"}
						{"            "}for (gap = n / 2; gap &gt; 0; gap = gap / 2){"\n"}
						{"            "}
						{"{"} {"\n"}
						{"                "}for (j = gap; j &lt; n; j++){"\n"}
						{"                "}
						{"{"}
						{"\n"}
						{"                    "}for (k = j - gap; k &gt;= 0; k -= gap){"\n"}
						{"                    "}
						{"{"}
						{"\n"}
						{"                        "}if (arr[k + gap] &gt;= arr[k]){"\n"}
						{"                            "}break;{"\n"}
						{"                        "}else{"\n"}
						{"                            "}swapping(arr[k + gap], arr[k]);
						{"\n"}
						{"                    "}
						{"}"}
						{"\n"}
						{"                "}
						{"}"}
						{"\n"}
						{"            "}
						{"}"}
						{"\n"}
						{"        "}
						{"}"}
						{"\n"}
						{"        "}int main(){"\n"}
						{"        "}
						{"{"}
						{"\n"}
						{"            "}int n;{"\n"}
						{"            "}cout &lt; "Enter the number of elements: ";{"\n"}
						{"            "}cin &gt;&gt; n;{"\n"}
						{"            "}int arr[n]; {"\n"}
						{"            "}cout &lt; "Enter elements:" &lt; endl;{"\n"}
						{"            "}for (int i = 0; i &lt; n; i++){"\n"}
						{"            "}
						{"{"}
						{"\n"}
						{"                "}cin &gt;&gt; arr[i];{"\n"}
						{"            "}
						{"}"}
						{"\n"}
						{"            "}cout &lt; "Array before Sorting: ";{"\n"}
						{"            "}display(arr, n);{"\n"}
						{"            "}shellSort(arr, n);{"\n"}
						{"            "}cout &lt; "Array after Sorting: ";{"\n"}
						{"            "}display(arr, n);{"\n"}
						{"        "}
						{"}"}
						{"\n"}
					</pre>
				</div>
			)}
		</div>
	);
};

export default ShellSortCode;
