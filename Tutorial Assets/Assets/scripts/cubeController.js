#pragma strict

var cubeCurrent: GameObject;

var cubePrefab: GameObject;

function Start()
{

}

function Update()
{

}

function OnGUI()
{
	if(cubeCurrent == null)
	{
		if(GUI.Button(Rect(10,10,170,50), "New Object"))
			cubeCurrent = Instantiate(cubePrefab);
	}
	else
		GUI.Box(Rect(10,10,170,50), "Press Space!");

}