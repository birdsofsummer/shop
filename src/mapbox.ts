const {fromEntries:unpairs,entries:pairs}=Object
const map=(f)=>(o={})=>unpairs(pairs(o).map(f)) 

add_tk=(u)=>{
        const prefix=`https://api.mapbox.com`
        const token='pk.eyJ1IjoiYmlyZHNvZnN1bW1lciIsImEiOiJjandpc3Q2dzcwMnF6M3prczk0MzZ5NHd0In0.onb1KZacYJ9bzeFSf-GP_w'
        const username="birdsofsummer"
        
        let u1=new URL(prefix + u +`/v1/${username}`)
        u1.searchParams.append("access_token",token)
        return u1
}

const map_api=()=>{
    let api={
        "tilesets":"/tilesets,
        "datasets":/datasets",
    }
    return map(([k,v])=>[k,add_tk(v)])(api)
}

/*

https://docs.mapbox.com/api/maps/
https://github.com/mapbox/mapbox-sdk-js

/tilesets/v1/{username}	GET	tilesets:list
/tilesets/v1/{username.map_id}	DELETE	tilesets:write

/datasets/v1/{username}	GET	datasets:list
/datasets/v1/{username}	POST	datasets:write
/datasets/v1/{username}/{dataset_id}	GET	datasets:read
/datasets/v1/{username}/{dataset_id}	PATCH	datasets:write
/datasets/v1/{username}/{dataset_id}	DELETE	datasets:write
/datasets/v1/{username}/{dataset_id}/features	GET	datasets:read
/datasets/v1/{username}/{dataset_id}/features/{feature_id}	PUT	datasets:write
/datasets/v1/{username}/{dataset_id}/features/{feature_id}	GET	datasets:read
/datasets/v1/{username}/{dataset_id}/features/{feature_id}	DELETE	datasets:write

/styles/v1/{username}/{style_id}/static/{overlay}/{lon},{lat},{zoom},{bearing},{pitch}|{auto}/{width}x{height}{@2x}	GET	styles:tiles
/styles/v1/{username}/{style_id}	GET	styles:read
/styles/v1/{username}	GET	styles:list
/styles/v1/{username}	POST	styles:write
/styles/v1/{username}/{style_id}	PATCH	styles:write
/styles/v1/{username}/{style_id}	DELETE	styles:write
/styles/v1/{username}/{style_id}.html	GET	styles:read
/styles/v1/{username}/{style_id}/sprite{@2x}.{format}	GET	styles:read
/styles/v1/{username}/{style_id}/sprite/{icon_name}	PUT	styles:write
/styles/v1/{username}/{style_id}/sprite/{icon_name}	DELETE	styles:write

/uploads/v1/{username}/credentials	POST	uploads:write
/uploads/v1/{username}	POST	uploads:write
/uploads/v1/{username}/{upload_id}	GET	uploads:read
/uploads/v1/{username}	GET	uploads:list
/uploads/v1/{username}/{upload_id}	DELETE	uploads:write

/fonts/v1/{username}/{font}/{start}-{end}.pbf	GET	fonts:read

[["/tilesets/v1/{username}","GET","tilesets:list"],["/tilesets/v1/{username.map_id}","DELETE","tilesets:write"],["/datasets/v1/{username}","GET","datasets:list"],["/datasets/v1/{username}","POST","datasets:write"],["/datasets/v1/{username}/{dataset_id}","GET","datasets:read"],["/datasets/v1/{username}/{dataset_id}","PATCH","datasets:write"],["/datasets/v1/{username}/{dataset_id}","DELETE","datasets:write"],["/datasets/v1/{username}/{dataset_id}/features","GET","datasets:read"],["/datasets/v1/{username}/{dataset_id}/features/{feature_id}","PUT","datasets:write"],["/datasets/v1/{username}/{dataset_id}/features/{feature_id}","GET","datasets:read"],["/datasets/v1/{username}/{dataset_id}/features/{feature_id}","DELETE","datasets:write"],["/styles/v1/{username}/{style_id}/static/{overlay}/{lon},{lat},{zoom},{bearing},{pitch}|{auto}/{width}x{height}{@2x}","GET","styles:tiles"],["/styles/v1/{username}/{style_id}","GET","styles:read"],["/styles/v1/{username}","GET","styles:list"],["/styles/v1/{username}","POST","styles:write"],["/styles/v1/{username}/{style_id}","PATCH","styles:write"],["/styles/v1/{username}/{style_id}","DELETE","styles:write"],["/styles/v1/{username}/{style_id}.html","GET","styles:read"],["/styles/v1/{username}/{style_id}/sprite{@2x}.{format}","GET","styles:read"],["/styles/v1/{username}/{style_id}/sprite/{icon_name}","PUT","styles:write"],["/styles/v1/{username}/{style_id}/sprite/{icon_name}","DELETE","styles:write"],["/uploads/v1/{username}/credentials","POST","uploads:write"],["/uploads/v1/{username}","POST","uploads:write"],["/uploads/v1/{username}/{upload_id}","GET","uploads:read"],["/uploads/v1/{username}","GET","uploads:list"],["/uploads/v1/{username}/{upload_id}","DELETE","uploads:write"],["/fonts/v1/{username}/{font}/{start}-{end}.pbf","GET","fonts:read"]]


*/
