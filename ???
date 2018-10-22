#include <cstdio>
#include <vector>
#include <queue>
#include <algorithm>

using namespace std;

int N;
int map[20][20];
vector<int> dir = { 1,2,3,4 };
vector<int> my_dir;

void move() {
	for (int i = 0;i < my_dir.size();i++) {
		printf("%d", my_dir[i]);
	}
	printf("\n");
}
void select(int cnt, int idx) {
	if (cnt == 5) {
		move();
		return;
	}
	for (int i = idx; i < dir.size();i++) {
		my_dir.push_back(dir[i]);
		//select(cnt + 1, i);

		select(cnt + 1, i + 1);
		my_dir.pop_back();
	}
}
int main() {
	scanf("%d", &N);

	for (int i = 0;i < N;i++) {
		for (int j = 0;j < N;j++) {
			scanf(" %d", &map[i][j]);
		}
	}
	select(0, 0);
	scanf("%d", &N);



}
