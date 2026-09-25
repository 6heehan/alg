function solution(new_id) {
  let id;
  id = new_id.toLowerCase();
  id = id.replace(/[^a-z0-9._-]/g,"");
  id = id.replace(/\.+/g,".");
  id = id.replace(/^\.|\.$/g, "");
  if( id === "") id = "a";
  if( id.length > 15) id = id.slice(0,15);
  if( id.endsWith(".")) id = id.slice(0,-1);
  while(id.length <3) id += id[id.length-1];
  return id
}
