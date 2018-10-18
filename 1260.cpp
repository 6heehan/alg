#include <cstdio>
#include <stack>
#include <queue>

using namespace std;


int main() {

	int n, m, v;

	scanf("%d %d %d", &n, &m, &v);

	int **graph = new int*[m];
	bool *check = new bool[n + 1];

	for (int i = 0; i < n + 1; i++) {
		check[i] = false;
	}
	for (int i = 0; i < m; i++) {
		graph[i] = new int[2];
		scanf("%d %d", &graph[i][0], &graph[i][1]);
		//      printf("input : %d %d\n",graph[i][0],graph[i][1]);
	}

	for (int i = 0; i < m; i++) {
		printf("input : %d %d\n", graph[i][0], graph[i][1]);
	}

	stack<int> s;
	s.push(v);
	check[v] = true;
	while (!s.empty()) {
		int now = s.top();
		printf("%d ", now);
		s.pop();

		for (int i = 0; i < m; i++) {
			if (now == graph[i][0]) {
				if (check[graph[i][1]] == false) {
					s.push(graph[i][1]);
					check[graph[i][1]] = true;
					break;
				}
			}
			else if (now == graph[i][1]) {
				if (check[graph[i][0]] == false) {
					s.push(graph[i][0]);
					check[graph[i][0]] = true;
					break;
				}
			}
			
		}

	}
	printf("\n");
	for (int i = 0; i < n+1; i++) {
		check[i] = false;
	}
	queue<int> q;

	q.push(v);
	check[v] = true;
	while (!q.empty()) {
		int now = q.front();
		printf("%d ", now);
		q.pop();
		for (int i = 0; i < m; i++) {
			if (now == graph[i][0]) {
				if (check[graph[i][1]] == false) {
					q.push(graph[i][1]);
					check[graph[i][1]] = true;
				}
			}
			else if (now == graph[i][1]) {
				if (check[graph[i][0]] == false) {
					q.push(graph[i][0]);
					check[graph[i][1]] = true;
				}
			}
		}

	}
	printf("\n");
	scanf("%d", &v);
	return 0;
}
