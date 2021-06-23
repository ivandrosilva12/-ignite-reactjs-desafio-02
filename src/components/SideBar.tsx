import { Button } from './Button';

interface SideBarProps {
  SelectedGenreId: number;
  Genres: Array<{
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;  
  }>;
  handleClickButton: any
}

export function SideBar({ SelectedGenreId, Genres, handleClickButton }: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
      <div className="buttons-container">
        {Genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={SelectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}