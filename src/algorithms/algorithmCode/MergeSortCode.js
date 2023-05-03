import React, { useState } from "react";
import "./sortingStyles.css";
const MergeSortCode = () => {
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
						{"        "}
						{"\n"}
						{"        "}void merge(int arr[], int s, int mid, int e){"\n"}
						{"        "}
						{"{"}
						{"\n"}
						{"            "}int n1 = mid - s + 1;{"\n"}
						{"            "}int n2 = e - mid;{"\n"}
						{"        "}
						{"\n"}
						{"            "}int a[n1];{"\n"}
						{"            "}int b[n2];{"\n"}
						{"        "}
						{"\n"}
						{"            "}for (int i = 0; i &lt; n1; i++){"\n"}
						{"            "}
						{"{"}
						{"\n"}
						{"                "}a[i] = arr[s + i];{"\n"}
						{"            "}
						{"}"}
						{"\n"}
						{"            "}for (int i = 0; i &lt; n2; i++){"\n"}
						{"            "}
						{"{"}
						{"\n"}
						{"                "}b[i] = arr[mid + 1 + i];{"\n"}
						{"            "}
						{"}"}
						{"\n"}
						{"        "}
						{"\n"}
						{"            "}int i = 0;{"\n"}
						{"            "}int j = 0;{"\n"}
						{"            "}int k = s;{"\n"}
						{"        "}
						{"\n"}
						{"            "}while (i &lt; n1 &amp;&amp; j &lt; n2){"\n"}
						{"            "}
						{"{"}
						{"\n"}
						{"                "}if (a[i] &lt; b[j]){"\n"}
						{"                "}
						{"{"}
						{"\n"}
						{"                    "}arr[k] = a[i];{"\n"}
						{"                    "}i++;{"\n"}
						{"                    "}k++;{"\n"}
						{"                "}
						{"}"}
						{"\n"}
						{"                "}else{"\n"}
						{"                "}
						{"{"}
						{"\n"}
						{"                    "}arr[k] = b[j];{"\n"}
						{"                    "}j++;{"\n"}
						{"                    "}k++;{"\n"}
						{"                "}
						{"}"}
						{"\n"}
						{"            "}
						{"}"}
						{"\n"}
						{"            "}while (i &lt; n1){"\n"}
						{"            "}
						{"{"}
						{"\n"}
						{"                "}arr[k] = a[i];{"\n"}
						{"                "}i++;{"\n"}
						{"                "}k++;{"\n"}
						{"            "}
						{"}"}
						{"\n"}
						{"            "}while (i &lt; n2){"\n"}
						{"            "}
						{"{"}
						{"\n"}
						{"                "}arr[k] = b[j];{"\n"}
						{"                "}j++;{"\n"}
						{"                "}k++;{"\n"}
						{"            "}
						{"}"}
						{"\n"}
						{"        "}
						{"}"}
						{"\n"}
						{"        "}
						{"\n"}
						{"        "}void mergSort(int arr[], int s, int e){"\n"}
						{"        "}
						{"{"}
						{"\n"}
						{"        "}
						{"\n"}
						{"            "}if (s &lt; e){"\n"}
						{"            "}
						{"{"}
						{"\n"}
						{"                "}int mid = ((s + e) / 2);{"\n"}
						{"                "}mergSort(arr, s, mid);{"\n"}
						{"                "}mergSort(arr, mid + 1, e);{"\n"}
						{"        "}
						{"\n"}
						{"                "}merge(arr, s, mid, e);{"\n"}
						{"            "}
						{"}"}
						{"\n"}
						{"        "}
						{"}"}
						{"\n"}
						{"        "}
						{"\n"}
						{"        "}int main(){"\n"}
						{"        "}
						{"{"}
						{"\n"}
						{"        "}
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
						{"            "}mergSort(arr, 0, n - 1);{"\n"}
						{"        "}
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

export default MergeSortCode;
