#include <cstdio>
#include <stack>
#include <queue>
using namespace std;
int main() {
	int n, m, v;
	scanf("%d %d %d", &n, &m, &v);
	
	int **graph = new int*[n+1];
	bool *check = new bool[n + 1];
	//동적할당
	
	for (int i = 0; i < n + 1; i++) {
		check[i] = false;
	}
	for (int i = 0; i < n+1; i++) {
		graph[i] = new int[n+1];
		//2차원 배열 동적할당
		for (int k = 0; k < n + 1; k++) {
			graph[i][k] = 0;
			//초기화
		}
	}
	for (int i = 0; i < m; i++) {
		int a, b;
		scanf("%d %d", &a, &b);
		graph[a][b] = 1;
		graph[b][a] = 1;
		//그래프 정보 입력
	}
		

	stack<int> s;
	s.push(v);
	
	while (!s.empty()) {
		int now = s.top();
		s.pop();
        	if(check[now] == false) {
			//이미 방문했던 정점이면 그냥 패스
        		printf("%d ", now);
			check[now] = true;
			for (int i = n+1; i > 0; i--) {
				//작은 정점 순으로 방문해야하기에 n+1에서 부터 내려옴
				if (graph[now][i] == 1) {
					//연결 되어있는지 확인
					if (check[i] == false) {
						//방문했는지 확인
						s.push(i);
					}
				}
			}
        	}
	}
	printf("\n");
	
	for (int i = 0; i < n + 1; i++) {
		check[i] = false;
		//방문 체크 배열 초기화
	}
	
	queue<int> q;

	q.push(v);
    	check[v] = true;
	while (!q.empty()) {
		int now = q.front();
		printf("%d ", now);
		q.pop();   
		for (int i = 1; i < n+1; i++) {
		    if (graph[now][i] == 1) {
			    //연결 되어있는지 확인
			    if (check[i] == false) {
				    //방문했는지 확인
				    q.push(i);
                    		    check[i] = true;
				    //바로 방문함을 표시, 중복으로 들어가지 않도록
			    }
		    }
        	}
	}
	printf("\n");
	

	return 0;
}
