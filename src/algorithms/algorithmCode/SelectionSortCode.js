import React, { useState } from "react";
import "./sortingStyles.css";
const SelectionSortCode = () => {
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
						{"        "}int main(){"\n"}
						{"        "}
						{"{"}
						{"\n"}
						{"            "}int n;{"\n"}
						{"            "}cout &lt;&lt; "enter the array length ?";{"\n"}
						{"            "}cin &gt;&gt; n;{"\n"}
						{"            "}cout &lt;&lt; " enter the array element in unsorted
						way? \n";
						{"\n"}
						{"            "}int arr[n];{"\n"}
						{"            "}for (int i = 0; i &lt; n; i++){"\n"}
						{"            "}
						{"{"}
						{"\n"}
						{"                "}cin &gt;&gt; arr[i];{"\n"}
						{"            "}
						{"}"}
						{"\n"}
						{"\n"}
						{"            "}for (int i = 0; i &lt; n - 1; i++){"\n"}
						{"            "}
						{"{"}
						{"\n"}
						{"                "}for (int j = i + 1; j &lt; n; j++){"\n"}
						{"                "}
						{"{"}
						{"\n"}
						{"                    "}if (arr[j] &lt; arr[i]){"\n"}
						{"                    "}
						{"{"}
						{"\n"}
						{"                        "}int temporary = arr[j];{"\n"}
						{"                        "}arr[j] = arr[i];{"\n"}
						{"                        "}arr[i] = temporary;{"\n"}
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
						{"            "}cout &lt;&lt; " this is an sorted array ." &lt;&lt;
						endl;
						{"\n"}
						{"            "};{"\n"}
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

export default SelectionSortCode;
