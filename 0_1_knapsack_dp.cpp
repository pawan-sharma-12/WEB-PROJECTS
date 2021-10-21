#include<bits/stdc++.h>
using namespace std;
int t[50][50];

int knapsack(int val[],int w[],int weight,int n)
{
   
    
   //choice diagram code 
       for(int i = 1 ;i<n+1;i++)
       for(int j=1;j<weight+1;j++)
       {
            if(w[i-1]<=j)
        {
             t[i][j]= max(val[i-1]+t[i-1][j - w[i-1]],t[i-1][j]);
        }
        else 
        {
            t[i][j]=t[i-1][j];  
        }
       }
       return t[n][weight];
      
    
}
void print(int arr[],int n)
{
   for(int i = 0 ;i<n;i++)
   {
        cout<<arr[i]<<" ";
   }
   cout<<endl;
}
int main()
{
    //initialization
   for(int i = 0 ;i<50;i++)
   for(int j=0 ;j<50;j++) if(i == 0 || j==0) t[i][j]=0;
    int n , weight;
  cin>>n>>weight;
  int val[n],w[n];
  for(int i =  0 ;i<n;i++)
  {
      val[i] = rand()%20;
      w[i] = rand() % 10;
      w[i] +=1;
  }
  cout<<"val array is : "<<endl;
  print(val,n);
  cout<<"weight array is :"<<endl;
  print(w,n);
  cout<<"max profit is :"<<knapsack(val,w,weight,n);
  return 0;
}