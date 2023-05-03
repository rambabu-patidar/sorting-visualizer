import React, { useState } from "react";
import "./sortingStyles.css";
const QuickSort3Code = () => {
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
						{"        "}#include &lt;bits/stdc++.h&gt;{"\n"}
						{"        "}using namespace std;{"\n"}
						{"        "}
						{"\n"}
						{"        "}void partition(int a[], int l, int r, int &amp;i, int
						&amp;j)
						{"\n"}
						{"        "}
						{"{"}
						{"\n"}
						{"            "}i = l - 1, j = r;{"\n"}
						{"            "}int p = l - 1, q = r;{"\n"}
						{"            "}int v = a[r];{"\n"}
						{"        "}
						{"\n"}
						{"            "}while (true){"\n"}
						{"            "}
						{"{"}
						{"\n"}
						{"                "}while (a[++i] &lt; v){"\n"}
						{"                    "};{"\n"}
						{"        "}
						{"\n"}
						{"                "}while (v &lt; a[--j]){"\n"}
						{"                    "}if (j == l){"\n"}
						{"                        "}break;{"\n"}
						{"        "}
						{"\n"}
						{"                "}if (i &gt;= j){"\n"}
						{"                    "}break;{"\n"}
						{"        "}
						{"\n"}
						{"                "}swap(a[i], a[j]);{"\n"}
						{"        "}
						{"\n"}
						{"                "}if (a[i] == v){"\n"}
						{"                "}
						{"{"}
						{"\n"}
						{"                    "}p++;{"\n"}
						{"                    "}swap(a[p], a[i]);{"\n"}
						{"                "}
						{"}"}
						{"\n"}
						{"        "}
						{"\n"}
						{"                "}if (a[j] == v){"\n"}
						{"                "}
						{"{"}
						{"\n"}
						{"                    "}q--;{"\n"}
						{"                    "}swap(a[j], a[q]);{"\n"}
						{"                "}
						{"}"}
						{"\n"}
						{"            "}
						{"}"}
						{"\n"}
						{"        "}
						{"\n"}
						{"            "}swap(a[i], a[r]);{"\n"}
						{"        "}
						{"\n"}
						{"            "}j = i - 1;{"\n"}
						{"            "}for (int k = l; k &lt; p; k++, j--){"\n"}
						{"                "}swap(a[k], a[j]);{"\n"}
						{"        "}
						{"\n"}
						{"            "}i = i + 1;{"\n"}
						{"            "}for (int k = r - 1; k &gt; q; k--, i++){"\n"}
						{"                "}swap(a[i], a[k]);{"\n"}
						{"        "}
						{"}"}
						{"\n"}
						{"        "}
						{"\n"}
						{"        "}void quicksort(int a[], int l, int r){"\n"}
						{"        "}
						{"{"}
						{"\n"}
						{"            "}if (r &lt;= l){"\n"}
						{"                "}return;{"\n"}
						{"        "}
						{"\n"}
						{"            "}int i, j;{"\n"}
						{"        "}
						{"\n"}
						{"            "}partition(a, l, r, i, j);{"\n"}
						{"        "}
						{"\n"}
						{"            "}quicksort(a, l, j);{"\n"}
						{"            "}quicksort(a, i, r);{"\n"}
						{"        "}
						{"}"}
						{"\n"}
						{"        "}
						{"\n"}
						{"        "}void printarr(int a[], int n){"\n"}
						{"        "}
						{"{"}
						{"\n"}
						{"            "}for (int i = 0; i &lt; n; ++i){"\n"}
						{"                "}printf("%d ", a[i]);{"\n"}
						{"            "}printf("\n");{"\n"}
						{"        "}
						{"}"}
						{"\n"}
						{"        "}
						{"\n"}
						{"        "}int main(){"\n"}
						{"        "}
						{"{"}
						{"\n"}
						{"            "}int a[] = {"{"}4, 9, 4, 4, 1, 9, 4, 4, 9, 4, 4, 1, 4
						{"}"};{"\n"}
						{"            "}int size = sizeof(a) / sizeof(int);{"\n"}
						{"        "}
						{"\n"}
						{"            "}printarr(a, size);{"\n"}
						{"            "}quicksort(a, 0, size - 1);{"\n"}
						{"            "}printarr(a, size);{"\n"}
						{"            "}return 0;{"\n"}
						{"        "}
						{"}"}
						{"\n"}
						{"        "}
						{"\n"}
					</pre>
				</div>
			)}
		</div>
	);
};

export default QuickSort3Code;
