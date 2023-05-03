import React, { useState } from "react";
import "./sortingStyles.css";

const InsertionSortCode = () => {
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
						{"\n"}
						{"        "}#include &lt;bits/stdc++.h&gt;{"\n"}
						{"        "}using namespace std;{"\n"}
						{"\n"}
						{"        "}void insertionSort(int arr[], int n){"\n"}
						{"        "}
						{"{"}
						{"\n"}
						{"            "}int i, key, j;{"\n"}
						{"            "}for (i = 1; i &lt; n; i++){"\n"}
						{"            "}
						{"{"}
						{"\n"}
						{"                "}key = arr[i];{"\n"}
						{"                "}j = i - 1;{"\n"}
						{"\n"}
						{"                "}while (j &gt;= 0 &amp;&amp; arr[j] &gt; key)
						{"\n"}
						{"                "}
						{"{"}
						{"\n"}
						{"                    "}arr[j + 1] = arr[j];{"\n"}
						{"                    "}j = j - 1;{"\n"}
						{"                "}
						{"}"}
						{"\n"}
						{"                "}arr[j + 1] = key;{"\n"}
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
						{"            "}int i;{"\n"}
						{"            "}for (i = 0; i &lt; n; i++){"\n"}
						{"                "}cout &lt;&lt; arr[i] &lt;&lt; " ";{"\n"}
						{"            "}cout &lt;&lt; endl;{"\n"}
						{"        "}
						{"}"}
						{"\n"}
						{"\n"}
						{"        "}int main(){"\n"}
						{"        "}
						{"{"}
						{"\n"}
						{"            "}int arr[] = {"{"}12, 11, 13, 5, 6{"}"};{"\n"}
						{"            "}int N = sizeof(arr) / sizeof(arr[0]);{"\n"}
						{"\n"}
						{"            "}insertionSort(arr, N);{"\n"}
						{"            "}printArray(arr, N);{"\n"}
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

export default InsertionSortCode;
