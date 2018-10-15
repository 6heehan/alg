#include <cstdio>
#include <queue>

using namespace std;
int main(){
        int t;
        int h;
        int w;

        scanf("%d",&t);

        while(t>0) {

                scanf("%d %d",&h,&w);
                char maze[100][100];
                int check[100][100];
                queue<pair<int,int>> q;

                for(int i=0;i<h;i++) {
                        char str[100];
                        scanf("%s",str);
                        printf("%s\n",str);
                        for(int j=0;j<w;j++) {
                                maze[j][i] = str[j];
                                check[j][i] = 0;
//                                printf("%d %d %c\n",j,i,maze[j][i]);
                        }
                }

                for(int i=0;i<h;i++) {
                        for(int j=0;j<w;j++) {
                                if(maze[j][i]=='*')
                                        check[j][i]=1;
                                else if(i==0||i==h-1) {
                                        q.push(pair<j,i>);
                                }
                                else if(j==0||j==w-1) {
                                        q.push(pair<j,i>);
                                }
                        }
                }

                //char key[26];

                t--;

//        printf("%s\n",maze[0]);
//        printf("%s\n",maze[1]);
//        printf("%c\n",maze[0][0]);
        }

        return 0;
}

