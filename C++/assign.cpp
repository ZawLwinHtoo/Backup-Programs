//
// Created by HUAWEI on 5/2/2023.
//
#include "stdio.h"
#include "stdlib.h"
struct node{
    int data;
    struct node* left;
    struct node* right;
};

//1023

struct node* create_new_node(int key){
    struct node* new_node = (struct node*)malloc(sizeof (struct node));
    new_node->data = key;
    new_node->left = NULL;
    new_node->right = NULL;

    return new_node;
}

struct node* insert_node(struct node* root, int key){

    if (root == NULL){
        return create_new_node(key);
    }else {

        if (root->data > key){
            root->left = insert_node(root->left,key);
        }else if (root->data <key){
            root->right = insert_node(root->right,key);
        }
    }
    return root;
}

void right(struct node* root, int key){
    int i=0;
    struct node* rooot = NULL;

    while (i<=15){

        int n=(15+1)/2;
        root = insert_node(root, key);
        int m = n;
        n = (15-n+1)/2;
        i= i+ m;

    }

}
int main(){
//    struct node* root =create_new_node(10);
////    struct node* root = NULL;
//    root = insert_node(root, 50);
//    root = insert_node(root, 3);
    int arr[15]= {1,2,3,4,5,6,7,8,9,10,11,12,13,14,15};
    int n = (15+1)/2;
    printf ("%d",n);
    struct node* root = NULL;
    root = insert_node(root, arr[n-1]);
    return 0;
}