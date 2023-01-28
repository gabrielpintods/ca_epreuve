var dico = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','k','r','s','t','u','v','w','x','y','z']

for(let i = 0; i < dico.length; i++)
{
    if (dico[i] == process.argv[2]) 
    {
        for(let j = i; j < dico.length; j++)
        {
            process.stdout.write(dico[j]);
        }
        break
    }
}

console.log();