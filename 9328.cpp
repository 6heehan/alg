#include <cstdio>
#include <queue>
#include <stack>
#include <cstring>

using namespace std;
int main() {
	int t;
	int h;
	int w;

	scanf("%d", &t);

	while (t > 0) {

		scanf("%d %d", &h, &w);
		char maze[101][101];
		int check[101][101];
		char key[27];
		stack<pair<int, int>> s;
		for (int i = 0;i < h;i++) {
			char str[100];
			scanf("%s", str);

			for (int j = 0;j < w;j++) {
				maze[j][i] = str[j];
				check[j][i] = 0;
			}
		}

		char str[27];
		scanf("%s", str);
		int len = strlen(str);
		for (int i = 0;i < len;i++) {
			key[i] = str[i];
		}

		for (int i = 0;i < h;i++) {
			for (int j = 0;j < w;j++) {
				check[j][i] = 0;
				if (maze[j][i] == '*')
					check[j][i] = 1;
				else if (i == 0 || i == h - 1) {
					s.push(make_pair(j, i));
				}
				else if (j == 0 || j == w - 1) {
					s.push(make_pair(j, i));
				}
			}
		}

		int res = 0;
		while (!s.empty()) {

			int x, y;
			x = s.top().first;
			y = s.top().second;
			check[x][y] = 1;
			s.pop();
			int key_len = strlen(key);
			if (x + 1 < w && check[x + 1][y] == 0) {
				if (maze[x + 1][y] >= 97 || maze[x + 1][y] <= 122) {
					//key found init!!
					key[key_len] = maze[x + 1][y];
					while (!s.empty()) {
						s.pop();
					}

					//init and start point stack push
					for (int i = 0;i < h;i++) {
						for (int j = 0;j < w;j++) {
							check[j][i] = 0;
							if (maze[j][i] == '*')
								check[j][i] = 1;
							else if (i == 0 || i == h - 1) {
								s.push(make_pair(j, i));
							}
							else if (j == 0 || j == w - 1) {
								s.push(make_pair(j, i));
							}
						}
					}

				}
				else if (maze[x + 1][y] >= 65 || maze[x + 1][y] <= 90) {
					//door found
					int door = maze[x + 1][y];
					for (int a = 0; a < key_len; a++) {
						if (key[a] == door + 32) {
							s.push(make_pair(x + 1, y));
						}
						else if (a == key_len - 1) {
							check[x + 1][y] == 1;
						}
					}
				}
				else if (maze[x + 1][y] == '$') {
					//document found
					res++;
					s.push(make_pair(x + 1, y));
				}
				else if (maze[x + 1][y] == '.') {
					//street? just pass
					s.push(make_pair(x + 1, y));
				}
				else {
					check[x + 1][y] == 1;
				}

			}

			if (x - 1 > 0 && check[x - 1][y] == 0) {

				if (maze[x - 1][y] >= 97 || maze[x - 1][y] <= 122) {
					//key found init!!
					key[key_len] = maze[x - 1][y];
					while (!s.empty()) {
						s.pop();
					}

					//init and start point stack push
					for (int i = 0;i < h;i++) {
						for (int j = 0;j < w;j++) {
							check[j][i] = 0;
							if (maze[j][i] == '*')
								check[j][i] = 1;
							else if (i == 0 || i == h - 1) {
								s.push(make_pair(j, i));
							}
							else if (j == 0 || j == w - 1) {
								s.push(make_pair(j, i));
							}
						}
					}

				}
				else if (maze[x - 1][y] >= 65 || maze[x - 1][y] <= 90) {
					//door found
					int door = maze[x - 1][y];
					for (int a = 0; a < key_len; a++) {
						if (key[a] == door + 32) {
							s.push(make_pair(x - 1, y));
						}
						else if (a == key_len - 1) {
							check[x - 1][y] == 1;
						}
					}
				}
				else if (maze[x - 1][y] == '$') {
					//document found
					res++;
					s.push(make_pair(x - 1, y));
				}
				else if (maze[x - 1][y] == '.') {
					//street? just pass
					s.push(make_pair(x - 1, y));
				}
				else {
					check[x - 1][y] == 1;
				}
			}

			if (y - 1 > 0 && check[x][y - 1] == 0) {

				if (maze[x][y - 1] >= 97 || maze[x][y - 1] <= 122) {
					//key found init!!
					key[key_len] = maze[x][y - 1];
					while (!s.empty()) {
						s.pop();
					}
					//init and start point stack push
					for (int i = 0;i < h;i++) {
						for (int j = 0;j < w;j++) {
							check[j][i] = 0;
							if (maze[j][i] == '*')
								check[j][i] = 1;
							else if (i == 0 || i == h - 1) {
								s.push(make_pair(j, i));
							}
							else if (j == 0 || j == w - 1) {
								s.push(make_pair(j, i));
							}
						}
					}
				}
				else if (maze[x][y - 1] >= 65 || maze[x][y - 1] <= 90) {
					//door found
					int door = maze[x][y - 1];
					for (int a = 0; a < key_len; a++) {
						if (key[a] == door + 32) {
							s.push(make_pair(x, y - 1));
						}
						else if (a == key_len - 1) {
							check[x][y - 1] == 1;
						}
					}
				}
				else if (maze[x][y - 1] == '$') {
					//document found
					res++;
					s.push(make_pair(x, y - 1));
				}
				else if (maze[x][y - 1] == '.') {
					//street? just pass
					s.push(make_pair(x, y - 1));
				}
				else {
					check[x][y - 1] == 1;
				}
			}

			if (y + 1 < h && check[x][y + 1] == 0) {

				if (maze[x][y + 1] >= 97 || maze[x][y + 1] <= 122) {
					//key found init!!
					key[key_len] = maze[x][y + 1];
					while (!s.empty()) {
						s.pop();
					}

					//init and start point stack push
					for (int i = 0;i < h;i++) {
						for (int j = 0;j < w;j++) {
							check[j][i] = 0;
							if (maze[j][i] == '*')
								check[j][i] = 1;
							else if (i == 0 || i == h - 1) {
								s.push(make_pair(j, i));
							}
							else if (j == 0 || j == w - 1) {
								s.push(make_pair(j, i));
							}
						}
					}

				}
				else if (maze[x][y + 1] >= 65 || maze[x][y + 1] <= 90) {
					//door found
					int door = maze[x][y + 1];
					for (int a = 0; a < key_len; a++) {
						if (key[a] == door + 32) {
							s.push(make_pair(x, y + 1));
						}
						else if (a == key_len - 1) {
							check[x][y + 1] == 1;
						}
					}
				}
				else if (maze[x][y + 1] == '$') {
					//document found
					res++;
					s.push(make_pair(x, y + 1));
				}
				else if (maze[x][y + 1] == '.') {
					//street? just pass
					s.push(make_pair(x, y + 1));
				}
				else {
					check[x][y + 1] == 1;
				}
			}



		}
		t--;
		printf("%d\n", res);
	}

	return 0;
}

