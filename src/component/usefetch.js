import useState, useEffect from 'react' ; 
const useFetch (url) 
const (data, setData) useState(nu11); 
const lispending, setlsPending) 
usestate(true); 
const terror, setErrorJ useState(nuII); 
useEffect(() 
set Timeout(() 
fetch(url) 
. then(res 
throw Error('could not fetch the data for that resource' ) ; 
return res.json(); 
. then(data 
setData(data) ; 
setlspending(false); 
setError(nu11); 
. catch(err 
setlspending(+alse); 
setError(err message) ; 
leøe); 
tur1J); 