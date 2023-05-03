import React, { useState } from "react";
import "./sortingStyles.css";
const BubbleSortCode = () => {
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
						{"        "}void bubbleSort(int arr[], int n){"\n"}
						{"        "}
						{"{"}
						{"\n"}
						{"            "}for (int i = 1; i &lt;= n - 1; i++){"\n"}
						{"            "}
						{"{"}
						{"\n"}
						{"                "}for (int j = 0; j &lt;= n - i; j++){"\n"}
						{"                "}
						{"{"}
						{"\n"}
						{"                    "}if (arr[j] &gt; arr[j + 1]){"\n"}
						{"                    "}
						{"{"}
						{"\n"}
						{"                        "}int temp = arr[j];{"\n"}
						{"                        "}arr[j] = arr[j + 1];{"\n"}
						{"                        "}arr[j + 1] = temp;{"\n"}
						{"                    "}
						{"}"}
						{"\n"}
						{"                "}
						{"}"}
						{"\n"}
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
						{"            "}bubbleSort(arr, n);{"\n"}
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

export default BubbleSortCode;
