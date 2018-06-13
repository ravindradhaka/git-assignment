#include<bits/stdc++.h>
using namespace std;
int solve(int num[][5],int i,int j,int count)
{
    //if(num[i][j]==1)
    //{
        if(num[i+1][j+1]==1)
        {
            return count+solve(num,i+1,j+1,count);
        }
        else if(num[i][j+1]==1)
        {
            return count+solve(num,i,j+1,count);
        }
        else if(num[i+1][j]==1)
        {
            return count+solve(num,i+1,j,count);
        }
        else if()
        {
            return count+1;
        }
    //}
    //else
    //{
        
    //}
    
}
//void solution()
int main()
{
   
    /*for(int i=0;i<n;i++)
    {
        for(int j=0;j<m;j++)
        {
            cin>>a[i][j];
            //b[i][j]=-2;
        }
    }*/
    int a[5][5]={{1,0,0,1,0},
                {0,1,0,1,0},
                {1,0,0,0,0},
                {1,1,0,0,0}
                {1,1,0,0,0}};
    

    int p=solve(a,0,0,0);
    cout<<p<<endl;
}