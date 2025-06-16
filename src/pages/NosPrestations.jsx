import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

function NosPrestations() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Développement Web</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Création de sites modernes et performants.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Design UX/UI</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Expérience utilisateur intuitive et design attractif.</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default NosPrestations
