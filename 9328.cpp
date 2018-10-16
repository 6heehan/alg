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
//                queue<pair<int,int>> q;
                stack<pair<int,int>> s;
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

                char str[26];
                sacnf("%s",str);
                int len = strlen(str);
                for(int i=0;i<len;i++){
                        key[i] = str[i];
                }

                for(int i=0;i<h;i++) {
                        for(int j=0;j<w;j++) {
                                check[j][i] = 0;
                                if(maze[j][i]=='*')
                                        check[j][i]=1;
                                else if(i==0||i==h-1) {
                                        s.push(pair<j,i>);
                                }
                                else if(j==0||j==w-1) {
                                        s.push(pair<j,i>);
                                }
                        }
                }
                
                int res = 0;
                while(!s.empty()){

                        int x,y;
                        x = s.top().first;
                        y = s.top().second;
                        check[x][y] = 1;
                        s.pop();
                        int key_len = strlen(key);
                        if(x+1 < w && check[x+1][y] == 0) {
                                if(maze[x+1][y] >= 97 || maze[x+1][y] <= 122) {
                                        //key found init!!
                                        key[key_len] = maze[x+1][y];
                                        while(!s.empty()){
                                                s.pop();
                                        }
                                        
                                        //init and start point stack push
                                        
                                        
                                } else if(maze[x+1][y] >= 65 || maze[x+1][y] <= 90) {
                                        //door found
                                        
                                        int door = maze[x+1][y];
                                        for(int a = 0; a < key_len; a++) {
                                                if(key[a] == door + 32) {
                                                        
                                                }
                                                        
                                        }
                                } else if(maze[x+1][y] == '$') {
                                        //document found
                                        res++;
                                        check[x+1][y] == 1;
                                } else {
                                        //street? just pass
                                }
                                        
                        }
                        
                        if(x-1 > 0 && check[x-1][y] == 0) {
                        }
                        
                        if(y-1 > 0 && check[x][y-1] == 0) {
                        }
                        
                        if(y+1 < h && check[x][y+1] == 0) {
                        }
                        
                        

                }
                t--;


//        printf("%s\n",maze[0]);
//        printf("%s\n",maze[1]);
//        printf("%c\n",maze[0][0]);
        }

        return 0;
}

