export default async function UserDetailView({params}:{params: Promise<{slug:string}>}){
    const slugObj = await params
    return(

    <h1>
        {slugObj.slug}
    </h1>
 )   
}