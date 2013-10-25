#pragma strict

var remains: GameObject;

function Start()
{

}

function Update()
{
	if(Input.GetKey(KeyCode.Space))
	{
		Instantiate(remains, transform.position, transform.rotation);
		
		Destroy(gameObject);
	}
}